var CodeMirror = require('./editor.jsx')
var browserStore = require('browser-store')
var page = require('page.js')

var mainEl = document.getElementById("main")


page("/", function showStartScreen () {
  console.log("hello")
  // apply styles
  require("./start.styl")
  mainEl.innerHTML = require("./components/start-screen.jade")()
  browserStore.get("leaderboard", function (err, storedLeaderboard) {
    var lb = JSON.parse(storedLeaderboard)
    if (err == null && lb != null && lb.length)
      document.getElementById("leaderboard").innerHTML = require("./components/leaderboard.jade")({
        leaderboard: lb
      })
  })
})
page("/start", function startRound () {
  console.log("Starting game")
  page.redirect("/round/1")
})
page("/round/:id", function showRound (id) {
  // apply styles
  require("./arcade.styl")
  mainEl.innerHTML = require("./components/editor.jade")({
    value: `function Run (number) {
        return number * 2;
      }`
  })
  CodeMirror.fromTextArea(mainEl.getElementsByTagName("textarea")[0])
})
page("/gameover", function showGameover () {

})

page(function () {
  page.redirect("/")
})



page()

var editorEl = document.getElementById("editor")
setTimeout(() => {
  
}, 1000)

