
var express = require("express");
var app = express();


app.use(express.static("app"));

app.get("/" , function(request, response){
    response.send("헬로우~~~~!");
});

app.listen(3000, function(){
    console.log("앱 예제 콘솔 3000 port에서 ~ ");
});
