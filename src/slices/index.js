import { combineReducers } from 'redux'
import loanReducer from './loan'

const rootReducer = combineReducers({
    loan: loanReducer,
})
export default rootReducer
