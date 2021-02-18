install: # npm install
	npm install

brain-games: # make brain-games
	node bin/brain-games.js

publish: # make publish
	npm publish --dry-run
