(ns app.games.typing-race.core
  (:require
   [goog.object]
   [app.game :refer [Game]]))

(defn- process-input [data input]
  (case (first input)
    :delta (update data :distance (fn [distance]
                                    (max 0
                                         (let [movement (* (:speed data) (second input))]
                                           (- distance movement)))))
    :key-down (if (= (first (:chars data))
                     (second input))
                (-> data
                    (update :chars rest)
                    (update :distance inc))
                data)
    data))

(defrecord TypingRace []
  Game
  (-init [this]
    (let [available-chars (mapv js/String.fromCharCode (range 97 123))]
      (assoc this
             :tiles 10
             :available-chars available-chars
             :distance 0 ;; distance of the first letter from the car
             :speed 0.0022
             :chars (repeatedly #(rand-nth available-chars)))))
  (-process-inputs [this inputs]
    (reduce process-input this inputs))
  (-render [this settings context]
    (let [area-width (get-in settings [:game-area/size :width])
          area-height (get-in settings [:game-area/size :height])
          area-horizontal-center (/ area-width 2)
          tile-size (Math/floor (/ area-height (:tiles this)))
          chars (take (:tiles this) (:chars this))]
      (goog.object/set context "textAlign" "center")
      (goog.object/set context "textBaseline" "top")
      (goog.object/set context "font" (str tile-size "px sans-serif"))
      (.clearRect context 0 0 area-width area-height)
      (.fillRect context
                 (- area-horizontal-center (/ tile-size 2))
                 (- area-height tile-size)
                 tile-size
                 tile-size)
      (dotimes [i (count chars)]
        (.fillText context
                   (nth chars i)
                   area-horizontal-center
                   (- area-height
                      (* (+ 2 i) tile-size)
                      (* tile-size (:distance this))))))))
