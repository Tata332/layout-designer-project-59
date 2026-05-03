install:
	npm install

build:
	gulp

lint:
	npx stylelint "./app/scss/**/*.scss"