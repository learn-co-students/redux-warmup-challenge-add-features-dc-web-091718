import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, CHANGE_FILTER } from './types';
import artworks from '../data/artworks';

export function fetchPaintings() {
	return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
	return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(paintingID) {
	return { type: DELETE_PAINTING, id: paintingID};
}

export function changeFilter(filter) {
	return {type: CHANGE_FILTER, filter}
}
