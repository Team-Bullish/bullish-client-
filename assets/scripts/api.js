const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (id) {
  console.log(id)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createSurvey = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllSurveys = function () {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      // contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showOneSurvey = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'GET',
    headers: {
      // contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSurvey = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createResponse = function (selected, id) {
  return $.ajax({
    url: config.apiOrigin + '/responses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      response: {
        selected: selected,
        surveyId: id
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createSurvey,
  showAllSurveys,
  updateSurvey,
  deleteSurvey,
  showOneSurvey,
  createResponse
}
