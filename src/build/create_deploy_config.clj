(ns build.create-deploy-config)

(defn- min-config []
  (with-open [r (clojure.java.io/reader "min.cljs.edn")]
    (clojure.edn/read (java.io.PushbackReader. r))))

(defn- sentry-dsn []
  (or
   (System/getenv "SENTRY_DSN")
   (throw (RuntimeException. "`SENTRY_DSN` env variable has to be set."))))

(defn- create-deploy-config [{:keys [sentry-dsn config]}]
  (merge-with
   merge
   config
   {:closure-defines {'app.config/sentry-dsn sentry-dsn}}))

(defn- deploy-config->string [config]
  (binding [*print-meta* true]
    (with-out-str
      (prn config))))

(defn -main [& args]
  (spit "deploy.cljs.edn"
        (deploy-config->string
         (create-deploy-config
          {:config (min-config)
           :sentry-dsn (sentry-dsn)}))))
