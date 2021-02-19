install: # npm install
	npm install

brain-games: # make brain-games
	node bin/brain-games.js

lint: # make lint
	npx eslint .
