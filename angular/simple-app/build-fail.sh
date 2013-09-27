echo build number $BUILD_NUMBER failed >> build.log
cd ../../
git add build.log
git c -m "BUILD FAILED - updateing build.log"