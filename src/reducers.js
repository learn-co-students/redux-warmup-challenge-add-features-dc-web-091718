import { combineReducers } from 'redux';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, CHANGE_FILTER } from './actions/types';

const paintingsReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_PAINTINGS:
			return [...action.payload];
		case DELETE_PAINTING:
			let index = state.findIndex(p => p.id === action.id)
			let newArr = [...state]
			newArr.splice(index, 1)

			return newArr
		default:
			return state;
	}
};

const activePaintingIdReducer = (state = null, action) => {
	switch (action.type) {
		case SELECT_ACTIVE_PAINTING:
			return action.id;
		default:
			return state;
	}
};

const filterReducer = (state = 'ALL', action) => {
	switch (action.type) {
		case CHANGE_FILTER:
			return action.filter
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	paintings: paintingsReducer,
	activePaintingId: activePaintingIdReducer,
	filter: filterReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
