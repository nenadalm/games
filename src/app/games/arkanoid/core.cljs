(ns app.games.arkanoid.core
  (:require
   [app.game :refer [Game]]
   [app.math :as m]))

(def ^:private pi 3.14)

(defn- polar->cartesian [r phi]
  [(* r (Math/cos phi))
   (* r (Math/sin phi))])

(defn- intersection-point [l1 l2]
  (let [[[x1 y1] [x2 y2]] l1
        [[x3 y3] [x4 y4]] l2
        x (/ (- (* (- (* x1 y2) (* y1 x2)) (- x3 x4))
                (* (- x1 x2) (- (* x3 x4) (* y3 x4))))
             (- (* (- x1 x2) (- y3 y4)) (* (- y1 y2) (- x3 x4))))
        y (/ (- (* (- (* x1 y2) (* y1 x2)) (- y3 y4))
                (* (- y1 y2) (- (* x3 y4) (* y3 x4))))
             (- (* (- x1 x2) (- y3 y4)) (* (- y1 y2) (- x3 x4))))]
    [x y]))

(comment
  (intersection-point
   [[1 0] [0 1]]
   [[0 0] [-1 -1]])

  )

(defn update-ball [data delta]
  (let [ball-dir (m/into-vector2 (:ball-dir data))
        ball-pos (m/into-point2 (:ball-pos data))
        coef (* (:ball-speed data) delta)
        movement (m/* ball-dir coef)
        requested-pos (m/+ ball-pos movement)
        pos (:ball-pos data)
        max-x (- (get-in data [:game-area/size 0])
                 (:ball-size data))
        max-y (- (get-in data [:game-area/size 1])
                 (:ball-size data))
        update-pos (fn [wall-dir wall-line-segment]
                     (let [new-dir (m/reflection ball-dir wall-dir)
                           [ip-x ip-y] (intersection-point [pos [(:x requested-pos) (:y requested-pos)]] wall-line-segment)
                           ip (m/Vector2. ip-x ip-y)
                           new-movement (m/reflection (m/into-vector2 (m/- requested-pos ip)) wall-dir)
                           new-requested-pos (m/+ ball-pos new-movement)]
                       ;; todo: new-pos still not ok?
                       (assoc data
                              :ball-dir [(:x new-dir) (:y new-dir)]
                              :ball-pos [(:x new-requested-pos) (:y new-requested-pos)])))]
    (cond
      (< max-x (:x requested-pos))
      (update-pos
       (m/Vector2. 0 -1)
       [[max-x 0] [max-x max-y]])

      (< (:y requested-pos) 0)
      (update-pos
       (m/Vector2. 1 0)
       [[0 0] [max-x 0]])

      (< (:x requested-pos) 0)
      (update-pos
       (m/Vector2. 0 -1)
       [[0 0] [0 max-y]])

      (< max-y (:y requested-pos))
      (update-pos
       (m/Vector2. 1 0)
       [[0 max-y] [max-x max-y]])
      :else (assoc data :ball-pos [(:x requested-pos) (:y requested-pos)]))))

(defn- process-input [data input]
  (case (first input)
    :delta (-> data
               (update :paddle-pos (fn [pos]
                                     (update pos 0 (fn [x]
                                                     (let [dx (* (:paddle-dir data) (:paddle-speed data) (second input))
                                                           new-x (+ x dx)
                                                           max-x (- (get-in data [:game-area/size 0])
                                                                    (get-in data [:paddle-size 0]))]
                                                       (min max-x (max 0 new-x)))))))
               (update-ball (second input)))
    :key-down (case (second input)
                "ArrowLeft" (update data :paddle-dir dec)
                "ArrowRight" (update data :paddle-dir inc)
                data)
    :key-up (case (second input)
              "ArrowLeft" (update data :paddle-dir inc)
              "ArrowRight" (update data :paddle-dir dec)
              data)
    data))

(defrecord Arkanoid []
  Game
  (-init [this]
    (let [game-area-size [400 400]  ;; todo: receive in arguments, make sure it doesn't change
          tiles 10
          area-horizontal-center (Math/floor (/ (game-area-size 0) 2))
          tile-size (Math/floor (/ (game-area-size 1) tiles))
          paddle-width (* 2 tile-size)
          paddle-height (/ tile-size 4)
          ball-size paddle-height]

      (assoc this
             :tiles tiles
             :ball-pos [(Math/floor (- area-horizontal-center (/ ball-size 2)))
                        (- (game-area-size 1) paddle-height ball-size)]
             :paddle-pos [(Math/floor (- area-horizontal-center (/ paddle-width 2)))
                          (- (game-area-size 1) paddle-height)]
             :ball-speed 0.22
             :paddle-speed 0.22
             :paddle-dir 0
             :paddle-size [paddle-width paddle-height]
             :ball-size paddle-height
             :ball-dir (polar->cartesian 1 (/ pi -4))
             :game-area/size game-area-size)))
  (-process-inputs [this inputs]
    (reduce process-input this inputs))
  (-render [this _ context]
    (let [game-area-size (:game-area/size this)
          ball-size (:ball-size this)
          ball-pos (:ball-pos this)
          paddle-pos (:paddle-pos this)
          paddle-size (:paddle-size this)]
      (.clearRect context 0 0 (game-area-size 0) (game-area-size 1))
      (.fillRect context
                 (+ (paddle-pos 0))
                 (+ (paddle-pos 1))
                 (paddle-size 0)
                 (paddle-size 1))
      (.fillRect context
                 (+  (ball-pos 0))
                 (+  (ball-pos 1))
                 ball-size
                 ball-size))))
