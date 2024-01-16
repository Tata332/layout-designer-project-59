install:
	npm install

lint:
	npx stylelint ./app/scss/**/*.scss

pug:
	npx gulp pug

scss:
	npx gulp scss