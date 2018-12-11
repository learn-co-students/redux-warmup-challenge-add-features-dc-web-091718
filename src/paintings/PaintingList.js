import React from 'react';
import PaintingListItem from './PaintingListItem';
import { connect } from 'react-redux'
import { FILTERS } from '../actions/types'


const PaintingList = ({ paintings, filter }) => {
	const items = filterPaintings(paintings, filter).map(pntg => {
		console.log(pntg)
		return <PaintingListItem key={pntg.id} painting={pntg} />
	});
	return <div className="ui relaxed divided list scroll">{items}</div>;
};

const filterPaintings = (paintings, filter) => {
	if (filter !== FILTERS.ALL) {
		return paintings.filter(p => p.museum.id === filter)
	}
	return paintings
}

const mapStateToProps = state => ({
	paintings: state.paintings,
	filter: state.filter
});

export default connect(mapStateToProps)(PaintingList);
