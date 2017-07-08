import { combineReducers } from 'redux'
import contactInfo from './contactInfo'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    contactInfo
})

export default rootReducer