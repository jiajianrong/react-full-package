import { combineReducers } from 'redux';
import { homeRecommendList } from './home';
import contactInfo from './contactInfo';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    homeRecommendList,
    contactInfo
})

export default rootReducer;