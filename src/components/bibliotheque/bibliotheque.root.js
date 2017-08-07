import React, { Component } from 'react';
import DesktopSkeleton from './skeletons/bibliotheque-desktop.skeleton';

class Bibliotheque extends Component {
	render() {
		return (
			<div id="page-library">
				<DesktopSkeleton />
			</div>
		)
	}
}
export default Bibliotheque;