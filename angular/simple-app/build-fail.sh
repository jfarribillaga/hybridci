echo build number $BUILD_NUMBER failed >> build.log
cd ../../
git add angular/simple-app/build.log
git commit -m "BUILD FAILED - updateing build.log"