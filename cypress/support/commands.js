// ***********************************************
// This example commands.js shows you how to
// create the custom command: 'login'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/api/commands
// ***********************************************
//
// Cypress.addParentCommand("login", function(email, password){
//   var email    = email || "joe@example.com"
//   var password = password || "foobar"
//
//   var log = Cypress.Log.command({
//     name: "login",
//     message: [email, password],
//     consoleProps: function(){
//       return {
//         email: email,
//         password: password
//       }
//     }
//   })
//
//   cy
//     .visit("/login", {log: false})
//     .contains("Log In", {log: false})
//     .get("#email", {log: false}).type(email, {log: false})
//     .get("#password", {log: false}).type(password, {log: false})
//     .get("button", {log: false}).click({log: false}) //this should submit the form
//     .get("h1", {log: false}).contains("Dashboard", {log: false}) //we should be on the dashboard now
//     .url({log: false}).should("match", /dashboard/, {log: false})
//     .then(function(){
//       log.snapshot().end()
//     })
// })

function dispatchKey (code) {
  return cy.document()
    .then(doc => {
      var e = doc.createEvent('KeyboardEvent')
      Object.defineProperty(e, 'keyCode', {
        get: function () {
          return this.keyCodeVal
        }
      })
      Object.defineProperty(e, 'which', {
        get: function () {
          return this.keyCodeVal
        }
      })
      var metaKey = false

      Object.defineProperty(e, 'metaKey', {
        get: function () {
          return metaKey
        }
      })

      Object.defineProperty(e, 'shiftKey', {
        get: function () {
          return false
        }
      })
      e.keyCodeVal = code

      e.initKeyboardEvent('keydown', true, true, doc.defaultView, false, false, false, false, e.keyCodeVal, e.keyCodeVal)
    // doc.body.dispatchEvent(e)
      doc.dispatchEvent(e)
    })
}

function registerCommand (name, code) {
  Cypress.addChildCommand(name, function () {
    const log = Cypress.Log.command({name})
    dispatchKey(code)
    .wait(1000)
    .then(function () {
      log.snapshot().end()
    })
  })
}

const arrowCodes = {
  left: 37,
  right: 39,
  up: 38,
  down: 40
}
Object.keys(arrowCodes).forEach(name => {
  registerCommand(name, arrowCodes[name])
})
