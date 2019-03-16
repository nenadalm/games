(ns app.game)

(defprotocol Game
  (-init [this] "Initializes game.")
  (-process-inputs [this inputs] "Incorporates inputs into the game.")
  (-render [this settings context] "Renders the game."))

(defn init [game]
  (-init game))

(defn process-inputs [game inputs]
  (-process-inputs game inputs))

(defn render [game settings context]
  (-render game settings context))
