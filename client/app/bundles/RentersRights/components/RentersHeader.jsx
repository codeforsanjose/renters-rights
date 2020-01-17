import classNames from 'classnames';
import React from 'react';

export default function RentersHeader({ className }) {	

	return (
		<header className={classNames('pt-4', className)}>
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="navbar-header">
					<a className="navbar-brand" href="/"><strong>San José Renter's Rights Guide</strong></a>
				</div>
			</nav>
		</header>
	);
}
