.DEFAULT_GOAL := all

node_modules: yarn.lock
	yarn install

resources/public/js/app.js: node_modules
	yarn release

resources/public/index.html: resources/public/js/app.js
	clojure -M -m build.create-index > $@

.PHONY: clean
clean:
	rm -rf resources/public/js resources/public/index.html

.PHONY: all
all: resources/public/index.html

.PHONY: test
test: node_modules
	clojure -M:cljfmt check
	clojure -M:clj-kondo
