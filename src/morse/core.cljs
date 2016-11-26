(ns morse.core
  (:require [reagent.core :as reagent :refer [atom]]
            [morse.code :as morse-code]
            [clojure.string :as str]))

(enable-console-print!)

(println "App started")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"
                          :rate 250
                          :long 3
                          :letter-pause 5
                          :pause 7
                          :idle "#fff"
                          :on "#f00"}))

(defn atom-input [value name]
  [:textarea {:type "text"
              :rows 10
              :value (get @value name)
              :style {:display (if (get-in @app-state [:hide name]) "none" "block")
                      :width "100%"
                      :border "solid 1px black"}
              :on-change #(swap! value assoc name (-> % .-target .-value))}])

(defn slider [param value min max step]
  [:input {:type "range" :value value :min min :max max :step step
           :style {:width "200px"}
           :on-change (fn [e]
                        (swap! app-state assoc param (-> e .-target .-value)))}])

(defn input [param min max step]
  [:input {:type "number" :min min :max max :step step
           :value (get @app-state param)
           :style {:border "solid 1px black"}
           :on-change #(swap! app-state assoc param (-> % .-target .-value))}])

(defonce color (atom (:idle @app-state)))

(defn decode [c]
  (case c
    \- (* (:long @app-state) (:rate @app-state))
    \. (:rate @app-state)))

(defn blink [c]
  (let [duration (decode c)]
    (reset! color (:on @app-state))
    (js/setTimeout #(reset! color (:idle @app-state)) duration)
    duration))

(defn play [[c & code]]
  ;(println c code)
  (when (:play? @app-state)
    (cond
      (= \space c) (js/setTimeout #(play code) (* (:pause @app-state) (:rate @app-state)))
      (nil? c) (swap! app-state assoc :play? false)
      :default (do (js/setTimeout #(play code) (+ (int (blink c)) (* (:letter-pause @app-state) (:rate @app-state))))))))

(defn to-test [text]
  (as-> text $
        (str/upper-case $)
        (str/split $ #"\s")
        (shuffle $)
        (str/join \space $)))

(defn play-test [text]
  (let [test-text (:test (swap! text assoc :test (to-test (:input @text))))]
    (swap! app-state assoc :play? true)
    (-> test-text #_(conj \+) morse-code/encode str/join play)))

(defn state []
  (let [text (atom {:input "Your morse code is here"})]
  (fn []
    [:div
     ;[:div app-state]
     [:button {:on-click #(swap! app-state update-in [:hide :input] not)} "Input text"]
     [:ul {:style {:display (if (get-in @app-state [:hide :input]) "none" "block")}}
      [:li "Rate: " [input :rate 50 5000 50] "ms"]
      [:li "Long: " [input :long 0.1 10 0.1] "x"]
      [:li "Letter pause: " [input :letter-pause 0.1 10 0.1] "x"]
      [:li "Pause: " [input :pause 0.1 30 0.1] "x"]]
     [:div [atom-input text :input]]
     [:p {:style {:display (if (get-in @app-state [:hide :input]) "none" "block")}} "Value: "
      [:span#code
       (->> @text :input morse-code/encode (str/join \space))]]
     [:button {:on-click #(if (:play? @app-state)
                           (swap! app-state assoc :play? false)
                           (play-test text))}
      (if (:play? @app-state) "Stop" "Play")]
     [:div#play {:style {:width 200 :height 200 :background-color @color}}]
     [:div [:p "Test"] [atom-input text :result]]
     [:button {:on-click #(js/alert (if (= (:test @text) (str/upper-case (:result @text))) "Passed" "Failed"))} "Done"]
     [:button {:on-click #(swap! app-state update-in [:hide :answer] not)} "Answer"]
     [:p {:style {:display (if (get-in @app-state [:hide :answer]) "none" "block")}} (:test @text)]
     ])))

(reagent/render-component [state]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)