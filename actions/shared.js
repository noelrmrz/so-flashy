import { addDeck } from '../actions/deck'
import { storeData } from '../utils/api'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
          .then(({users, questions}) => {
              dispatch(receiveUsers(users))
              dispatch(receiveQuestions(questions))
              //dispatch(setAuthedUser(AUTHED_ID))
              dispatch(hideLoading())
          })
    }
}

export function handleLogin(authedUser) {
    return (dispatch) => {
        dispatch(setAuthedUser(authedUser))
    }
}

export function handleLogout(authedUser) {
    return (dispatch) => {
        dispatch(setAuthedUser(authedUser))
    }
}

export function handleAnswer(qid, option) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
      const info = {
        authedUser: authedUser,
        qid,
        answer: option
      }
      _saveQuestionAnswer(info)
          .then(() => {
              dispatch(saveQuestionAnswer(info))
              dispatch(saveUserAnswer(authedUser, qid, option))
          })
    }
}

// deck should be a JSON object if not, create it when calling storeData
export function handleAddQuestion(deck) {
    return async (dispatch, getState) => {
        const deck = await storeData(deck)
        dispatch(addDeck(deck))
    }
}