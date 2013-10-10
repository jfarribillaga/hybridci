#!/bin/sh

COMPILE_MODE=${1:-"PRODUCTION"} #default value prod

echo "Compiling web-app for iOS project in [ $COMPILE_MODE ] mode ..."
rm -rf hybrid/ios/www
cp -R hybrid/ios/www_original hybrid/ios/www

cd web-app/app/

case "$COMPILE_MODE" in
  	debug) 
  		#DEPLOY FOR TESTING / DEBUG
		sencha app build testing
		cd -
		cp -R web-app/app/build/senchaBdd/testing/ hybrid/ios/www/
  	;;
  	dev)
 		#DEPLOY FOR DEV: entire WEB-APP
		cd -
		cp -R web-app/app hybrid/ios/www/
 	;;
  	*)
		#DEPLOY FOR PRODUCTION
		sencha app build production
		cd -
		cp -R web-app/app/build/senchaBdd/production/ hybrid/ios/www/
	;;
esac
