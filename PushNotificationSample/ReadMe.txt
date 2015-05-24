- Ionic latest
- all plugins https://github.com/hollyschinsky/PushNotificationSample
-- mongo installed
npm install node-pushserver -g


C:\Camilo\MobileDev\PluralSightCourse\PushNotificationSample\node-pushserver>pushserver -c config.json
Listening on port 8000...
ERROR: MongoError: auth failed

fixed : updated credentials in config.json
"mongodbUrl": "mongodb://localhost:27017/test",


pushserver -c config.json

Working .. needed to add handler pushNotificationReceived (controller.js) and post from browser regid from logs :
http://192.168.1.72:8000/subscribe
POST
{"user":"user7358696","type":"android","token":"APA91bHeeQbtq1EMyhhswp1kSCD6pBn_DCTy9UmEGADe0tV1LEMwRm4VBK89ieGOF1smz56V3vjJ_Amowabny1qXGp02srm_yjkcgAxnLxPMerJWNPMbQoT-sKS0mlhTFQQJBMtvbXwusIOUK8V3TbKE6gy4H1EGwA"} 

Do:
https://www.npmjs.com/package/node-pushserver

