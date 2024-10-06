const express = require("express");
const app = express();
var http = require('http')
var forceSsl = require('force-ssl-heroku');
 
// our default array of dreams
const dreams = [
  "oh"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("assets"));
app.use(forceSsl);
let hndlr = ["/", "/nitromethod", "/project", "/linktree", "/testing"]
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/handler/home.html");
});

 app.get("/ok", (request, response) => {
   response.sendFile(__dirname + "/gaguna/contoh.html");
   response.sendStatus(200)
 })

app.get("/bot", (request, response) => {
  response.sendFile(__dirname + "/misc/bot.html");
})

app.get("/homet", (request, response) => {
  response.sendFile(__dirname + "/handler/homete.html");
})

app.get("/projecti", (request, response) => {
  response.sendFile(__dirname + "/handler/projecti.html")
})

app.get("/discord", (request, response) => {
  response.sendFile(__dirname +"/misc/discord.html");
})

app.get("/gamew", (request, response) => {
  response.sendFile(__dirname + "/misc/gamew.html");
})

app.get("/nitro", (request, response) => {
  response.sendFile(__dirname + "/misc/nitromethod.html")
})
/*
app.use(function(req, res, next) {
res.status(404).sendFile(__dirname + "/handler/404.html");
});*/


app.get("/linktree", (request, response) => {
  response.sendFile(__dirname + "/handler/linktr.html");
});


app.get("/about", (request, response) => {
  response.sendFile(__dirname +"/handler/project.html");
});


app.get("/proj-main", (request, response) => {
  response.sendFile(__dirname + "/handler/project-maintain.html");
  })

app.get("/test", (request, response) => {
  response.sendFile(__dirname + "/handler/test.html");
})

app.get("/404", (request, response) => {
  response.sendFile(__dirname + "/handler/404.html");
})

app.get("/batik", (request, response) => {
  response.sendFile(__dirname + "/handler/tugas1.html");
})

app.get("/.well-known/pki-validation/6BE1CC8BD40E927B81634B56D6832A64.txt", (request, response) => {
 response.sendFile(__dirname + "/handler/zerossl.txt");
})

app.get("/backup", (request, response) => {
  response.sendFile(__dirname + "/misc/test1.html");
  })

app.get("/2fa", (request, response) => {
  response.sendFile(__dirname + "/misc/test1.html");
  })

app.get("/lastfm", (request, response) => {
  response.sendFile(__dirname +"/misc/lastfm.html");
});


// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
})

app.get("/.well-known/discord", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.sendFile(__dirname + "/handler/dc.txt");
})



// listen for requests :)
const listener = 
      app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
} );
setInterval(() => {
  http.get(`http://farisdaffa.dev/ok`);
}, 20000); 
