(ns ^:figwheel-hooks app.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [taoensso.timbre :as timbre :refer-macros [error]]
   [app.timbre.appender.sentry :refer [sentry-appender]]
   [app.config :as config]
   [app.views :as views]
   [app.game-engine :as game-engine]))

(set! *warn-on-infer* true)

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/app]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (when (seq config/sentry-dsn)
    (timbre/merge-config!
     {:appenders {:sentry (sentry-appender config/sentry-dsn)}})
    (.addEventListener js/window "error" (fn [^js/ErrorEvent e] (error (.-error e)))))
  (game-engine/init)
  (mount-root))

(defn ^:after-load after-load []
  (mount-root))
