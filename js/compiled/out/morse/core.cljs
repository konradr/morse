(ns morse.core
  (:require [reagent.core :as reagent :refer [atom]]
            [morse.code :as morse-code]
            [clojure.string :as str]))

(enable-console-print!)

(println "App started")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"
                          :speed 1000}))

(defn hello-world []
  [:p (:text @app-state)])

(defn atom-input [value]
  [:textarea {:type "text"
              :cols 80
              :rows 10
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(def idle "#fff")
(def on "#f00")
(defonce color (atom on))

(defn blink [node]
  )

(defn play [code]
  )

(defn state []
  (let [val (atom "Your morse code is here")]
  (fn []
    [:div
     [:div [atom-input val]]
     [:p "Value: "  (->> @val morse-code/encode (str/join \space))]
     #_[:button {:on-click #(play (morse-code/encode @val))} "Play"]
     #_[:div#play {:style {:width 200 :height 200 :background-color @color}}]])))

(reagent/render-component [state]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
