(ns app.views
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [app.events]
   [app.subs]
   [app.components.layout :refer [layout]]
   [app.games.typing-race.core :refer [->TypingRace]]
   [app.games.arkanoid.core :refer [->Arkanoid]]))

(defn- canvas-ref [canvas]
  (re-frame/dispatch [:replace-canvas canvas])
  (when canvas
    (.addEventListener canvas
                       "keydown"
                       (fn [e]
                         (.preventDefault e)
                         (when-not (.-repeat e)
                           (re-frame/dispatch [:game.input/key-down (.-key e)]))))
    (.addEventListener canvas
                       "keyup"
                       (fn [e]
                         (.preventDefault e)
                         (re-frame/dispatch [:game.input/key-up (.-key e)])))))

(defn- state-label []
  (let [state @(re-frame/subscribe [:game-state])]
    [:p
     "State: "
     state
     (case state
       :stopped " (click into the game area to start the game)"
       :paused " (click into the game area to continue the game)"
       "")]))

(defn- typing-race-content []
  [:<>
   [:h2.title.is-2 "Description"]
   [:p
    "There is a car at the bottom of the game area that would like to move forward, "
    "but there are some letters in it's way! Your goal is to clear the path by "
    "shooting the letters by pressing the keys on your keyboard."]
   [:h2.title.is-2 "Controls"]
   [:p
    "Shoot: press letter on keyboard you see in front of the car."]
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
       "Support for keyboards activated by touch (phones, tablets, ...)."]]]]])

(defn- arkanoid-content []
  [:<>
   [:h2.title.is-2 "Description"]
   [:p
    "This game is work in progress."]
   [:h2.title.is-2 "Controls"]
   [:p "Move paddle to left: left arrow"]
   [:p "Move paddle to right: right arrow"]])

(def ^:private games
  {:typing-race {:title "Typing race"
                 :name :typing-race
                 :content [typing-race-content]
                 :start (fn []
                          (->TypingRace.))}
   :arkanoid {:title "[WIP]: Arkanoid"
              :name :arkanoid
              :content [arkanoid-content]
              :start (fn []
                       (->Arkanoid.))}})

(defn- render-game [game]
  [:<>
   [:h1.title.is-1 (:title game)]
   [:div.columns
    [:div.column
     [state-label]
     [:canvas {:width "400px"
               :height "400px"
               :tab-index 1
               :style {:border "1px solid"}
               :on-focus #(re-frame/dispatch [:game/resume (:name game) ((:start game))])
               :on-blur #(re-frame/dispatch [:game/pause])
               :ref canvas-ref}]]
    [:div.column
     (:content game)]]])

(defn- game-nav [game]
  (let [current-page @(re-frame/subscribe [:page-name])]
    [:li (cond-> {}
           (= (:name game) current-page) (assoc :class "is-active"))
     [:a {:on-click #(re-frame/dispatch [:open-page (:name game)])}
      (:title game)]]))

(defn- games-bar [games]
  [:div.tabs
   [:ul
    (for [[_ game] games]
      ^{:key (:name game)} [game-nav game])]])

(defn app []
  (let [current-page @(re-frame/subscribe [:page-name])
        game (games current-page)]
    [layout
     [:<>
      [games-bar games]
      (when game
        [render-game game])]]))
