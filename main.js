'use strict';
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = require("./server.js");
const app = express();
const rateLimit = require("express-rate-limit");
const getIP = require('ipware')().get_ip;
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 500, // limit each IP to max requests per windowMs
    message: {
        error: "Bạn đã đặt giới hạn lượt yêu cầu 500/1p"
    }
});
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    var ipInfo = getIP(req);
    var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m', '\x1b[32m'];
    var more = color[Math.floor(Math.random() * color.length)];
    console.log(more + '[ IP ] -> ' + ipInfo.clientIp);
    next();
});
app.post('/')
app.use("/", server);
app.set("json spaces", 4);
app.use((error, req, res, next) => {
    res.status(error.status).json({ message: error.message });
});
///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////
app.set('port', (process.env.PORT || 5000));
//For avoidong Heroku $PORT error
app.get('/', function(req, res) {
   // var result = 'App is running'
  //  response.send(result);
     
res.json({
    "message": "API NO KEY BY TNHAN",
    "example": {
        "facebook": {
            "find_uid_facebook": "/finduid?url=<url profile, story, post, video,...>",
            "download_facebook": "/v2/fbget?url=<url> (download được stories)"
        },
        "images": {
            "GET": {
                "girl": "/images/girl",
                "sex": "/images/sex",
                "mong": "/images/mong",
                "ma": "/images/ma",
                "du": "/images/du",
                "instagram":"/iamges/instagram",
                "twitter":"/images/tw",
                "video girl china":"/images/china"
            },
        },
        "GAME": {
            "dhbc": "/dhbcv1",
            "dhbcv2": "/dhbcv2",
            "linkword": "/linkword?word=",
            "getKeyWord": "/vuatiengviet/keyword",
            "createImage": "/vuatiengviet/image?word=từ khóa",
            "cfs": "/cfs",
            "cfsdata": "/cfsdata",
            "react": "/react",
            "taixiu": "/taixiu",
            "taixiu2": "/taixiuv2",
            "dovui": "/dovui",
        },
        "data": {
            "covid": "/covid?country=viet nam",
            "info_facebook": "/info",
            "leageuoflegends": {
                "list_champion": "/lol/list",
                "champion": "/lol?champion=yasuo"
            },
            "pokemon": "/pokemon/search?name=Pikachu",
            "pinterest": "/pinterest?search=mirai"
        },
        "utilities": {
            "bank": {
                "check": "/bank/check",
                "find": "/bank/find",
                "get": "/bank/get",
                "password": "/bank/password",
                "pay": "/bank/pay",
                "register": "/bank/register",
                "send": "/bank/send",
                "top": "/bank/top"
            },
        }
    }
})

  
}).listen(app.get('port'), function() {
    console.log('\x1b[36m[ START ] -> Server listening on portt\x1b[37m', app.get('port'), '\n');
});
// build tool
app.post('/', function(request, response) {
const request1 = require('request')
var content = request.param.content
if(!content) return response.json({ erorr: 'thieu du lieu!'})
const options = {
  method: 'POST',
  url: 'https://buildtool.dev/verification',
  headers: {
    'cookie': 'paste_submitted=yes; last_code_class=language-js; last_page_link=code-viewer.php%3Fpaste%3D097ba7.language-js'
  },
  form: {
    'content': content,
    'code_class': 'language-js'
  }
};
request1(options, function (error, response1, body) {
  var start = body.indexOf('href=\"code-viewer')
  var end = body.indexOf('language-js\">Permanent link')
  var cut = body.substring(start + 6, end + 11)
  response.json({
	  data: 'https://buildtool.dev/' + cut
  })
});
});

// bank
async function bank() {
const { writeFileSync } = require('fs-extra');
const { join } = require('path');
const pathData = join(__dirname, "public", "bank", "data", "bank.json");
const user = require('./public/bank/data/bank.json');
    if(user[0] == undefined ) return
    while(true) {
	    for (let id of user) {
		    var userData = user.find(i => i.senderID == id.senderID);
		    var money = userData.data.money;
		    userData.data.money = parseInt(money) + parseInt(money) * 0.005
		    writeFileSync(pathData, JSON.stringify(user, null, 2));
    	}
	    console.log("DANG XU LI BANKING");
	    await new Promise(resolve => setTimeout(resolve, 60 * 60 * 1000))
    }
}
bank()
// -------------------------->      END     <-------------------------------//
