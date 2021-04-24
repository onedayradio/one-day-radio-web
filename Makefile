deploy-dev:
	rm -rf build
	yarn build:dev
	cd infrastructure && yarn bootstrap
	cd infrastructure && yarn synth:dev
	cd infrastructure && yarn deploy:dev

deploy-prod:
	rm -rf build
	yarn build
	cd infrastructure && yarn bootstrap
	cd infrastructure && yarn synth:prod
	cd infrastructure && yarn deploy:prod

local:
	yarn start
