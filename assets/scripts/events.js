'use scrict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log("i'm here")
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // console.log(data)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFailure)
  console.log(data)
}

const onSignOut = function () {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  console.log(data)
}

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.createSurvey(data)
    .then(ui.createSuccessful)
    .catch(ui.createFailed)
}

const onShowAllSurveys = function (event) {
  event.preventDefault()
  api.showAllSurveys()
    .then(ui.showAllSuccess)
    .catch(ui.showAllFailure)
}

const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSurvey(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailed)
  console.log(data)
}

const onDeleteSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteSurvey(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailed)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create').on('submit', onCreateSurvey)
  $('#showAll').on('submit', onShowAllSurveys)
  $('#update').on('submit', onUpdateSurvey)
  $('#delete').on('submit', onDeleteSurvey)
  $('a.show-form').on('click', function () {
    $('#sign-up').toggle()
  })
  $('a.show-in').on('click', function () {
    $('#sign-in').toggle()
  })
  // $('a.show-in').on('click', function () {
  //   $('#vote').toggle()
  // })
}

module.exports = {
  addHandlers
}
