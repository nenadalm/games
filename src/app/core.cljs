(ns ^:figwheel-hooks app.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [app.views :as views]
   [app.game-engine :as game-engine]))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/app]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (game-engine/init)
  (mount-root))

(defn ^:after-load after-load []
  (mount-root))
