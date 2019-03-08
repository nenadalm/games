(ns app.views
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [app.events]
   [app.subs]
   [app.components.layout :refer [layout]]))

(defn- canvas-ref [canvas]
  (re-frame/dispatch [:replace-canvas canvas])
  (when canvas
    (.addEventListener canvas
                       "keydown"
                       (fn [e]
                         (when-not (.-repeat e)
                           (re-frame/dispatch [:game.input/key-down (.-key e)]))))))

(defn state-label []
  (let [state @(re-frame/subscribe [:game-state])]
    [:p
     "State: "
     state
     (case state
       :stopped " (click into the game area to start te game)"
       :paused " (click into the game area to continue the game)"
       :running " (start typing to move forward)"
       "")]))

(defn app []
  [layout
   [:<>
    [:h1.title.is-1 "Typing race"]
    [:div.columns
     [:div.column
      [state-label]
      [:canvas {:width "400px"
                :height "400px"
                :tab-index 1
                :style {:border "1px solid"}
                :on-focus #(re-frame/dispatch [:game/resume :typing-race])
                :on-blur #(re-frame/dispatch [:game/pause])
                :ref canvas-ref}]]
     [:div.column
      [:h2.title.is-2 "Description"]
      [:p
       "There is a car at the bottom of the game area that would like to move forward, "
       "but there are some letters in it's way! Your goal is to clear the path by "
       "shooting the letters by pressing the keys on your keyboard."]
      [:h2.title.is-2 "Possible future features"]
      [:div.content
       [:ul
        [:li
         [:p
          "Missiles should be launched off the car on key press and once they hit a letter, it should explode."]]
        [:li
         [:p
          "Statistics about typing (speed, accuracy, ...)."]]
        [:li
         [:p
          "Support for keyboards activated by touch (phones, tablets, ...)."]]]]]]]])
