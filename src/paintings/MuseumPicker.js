import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import { FILTERS } from '../actions/types'

const MuseumPicker = ({changeFilter}) => {
	return (
		<div className="row">
			<div className="ui menu">
				<div className="active item" onClick={() => changeFilter(FILTERS.ALL)}>All Museums</div>
				<div className="item" onClick={() => changeFilter(FILTERS.NATIONAL_GALLERY)}>National Gallery of Art, Washington D.C.</div>
			</div>
		</div>
	);
};

export default connect(null, actions)(MuseumPicker);
