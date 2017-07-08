//import initStateData from './initData';
import { FETCH_HOME_RECOMMEND_LIST } from '../actions/home';

export function homeRecommendList ( state=[]/* = initStateData.homeRecommendList*/, action ) {

	switch (action.type) {

		case FETCH_HOME_RECOMMEND_LIST:

			return action.payload

		default:

			return state

	}	

}
