var express = require('express'),
    path = require('path'),
    port = process.env.PORT || 9099,
    app = express(),
    request = require('request'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static assets normally
app.use(express.static(__dirname + '/export/ch'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.all("*", function(req, resp, next) {
    let query = (req.method==="GET"?req.query:req.body)||{};

    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");

    if(/^1$/.test(query.corNode)){
        resp.set("Content-Type","text/plain");
        request('http://10.99.2.70:9092'+req.url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let d = new Date();
                console.log(req.url+":");
                console.log(body);
                console.log("-----------"+d.getFullYear()+
                    "-"+(d.getMonth()+1)+"-"+d.getDay()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
                resp.send(body);
            }else{
                resp.send({"msg": "10.99.2.70 报错或者找不到资源"});
            }
        });
    }else{
        next();
    }
});

let x = (req,resp,next)=>{
    let u = req.url.match(/\/R\/[^\/]+/)[0].replace(/\/R\//,''); 
    resp.sendFile(path.resolve(__dirname, 'export/ch/', u+".html"));
};

app.route(/^\/R\//).get(x).post(x);

app.listen(port);
console.log("http://localhost:"+port+"/main.html");
