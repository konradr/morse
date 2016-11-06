(ns morse.core
  (:require [reagent.core :as reagent :refer [atom]]
            [morse.code :as morse-code]
            [clojure.string :as str]))

(enable-console-print!)

(println "App started")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"
                          :rate 250
                          :idle "#fff"
                          :on "#f00"}))

(defn hello-world []
  [:p (:text @app-state)])

(defn atom-input [value]
  [:textarea {:type "text"
              :cols 80
              :rows 10
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn slider [param value min max step]
  [:input {:type "range" :value value :min min :max max :step step
           :style {:width "200px"}
           :on-change (fn [e]
                        (swap! app-state assoc param (-> e .-target .-value)))}])

(defonce color (atom (:idle @app-state)))

(defn decode [c]
  (case c
    \- (* 3 (:rate @app-state))
    \. (:rate @app-state)))

(defn blink [c]
  (let [duration (decode c)]
    (reset! color (:on @app-state))
    (js/setTimeout #(reset! color (:idle @app-state)) duration)
    duration))

(defn play [[c & code]]
  ;(println c code)
  (cond
    (= \space c) (js/setTimeout #(play code) (* 7 (:rate @app-state)))
    (nil? c) :no-op
    :default (do (js/setTimeout #(play code) (+ (blink c) (* 3 (:rate @app-state)))))))

(defn state []
  (let [val (atom "Your morse code is here")]
  (fn []
    [:div
     [:div app-state]
     [:div [atom-input val]]
     [:p "Value: "
      [:a#code
       (->> @val morse-code/encode (str/join \space))]]
     [:button {:on-click #(play (->> @val morse-code/encode (str/join)))} "Play"]
     ;[slider :rate 250 100 1000 50]
     [:div#play {:style {:width 200 :height 200 :background-color @color}}]])))

(reagent/render-component [state]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
