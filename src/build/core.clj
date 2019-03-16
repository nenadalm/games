(ns build.core
  (:require
   [clojure.edn :as edn]))

(def manifest-path "resources/public/js/manifest.edn")
(def template-path "resources/public/index.html")
(def output-path "resources/public/index.html")

(defn- file-name [path]
  (.getName (clojure.java.io/file path)))

(defn- manifest->replacements [manifest]
  (reduce-kv (fn [m k v]
               (assoc m (file-name k) (file-name v)))
             {}
             manifest))

(defn- update-fingerprints [template-content manifest]
  (let [replacements (manifest->replacements manifest)]
    (loop [template-content template-content
           match-replacements (seq replacements)]
      (if-let [match-replacement (first match-replacements)]
        (recur (clojure.string/replace template-content
                                       (key match-replacement)
                                       (val match-replacement))
               (next match-replacements))
        template-content))))

(defn- read-manifest []
  (-> manifest-path
      slurp
      edn/read-string))

(defn- delete-file-recursively [f]
  (let [files (some-> f
                      clojure.java.io/file
                      (as-> file (if (.exists file) file nil))
                      file-seq
                      reverse)]
    (doseq [file files]
      (clojure.java.io/delete-file file))))

(defn- update-template-fingerprints
  "Takes care of cache busting by replacing js files in template with alternatives using fingerprints.
  (replaces e.g. app.js with app-111ce5a.js)"
  [manifest]
  (->> (update-fingerprints
        (slurp template-path)
        manifest)
       (spit output-path)))

(defn post-build-hook [& args]
  (let [manifest (read-manifest)]
    (update-template-fingerprints manifest)))

(defn pre-build-hook [& args]
  (delete-file-recursively "resources/public/js"))
