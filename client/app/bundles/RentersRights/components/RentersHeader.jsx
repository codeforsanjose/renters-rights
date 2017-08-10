import classNames from 'classnames';
import React from 'react';

export default function RentersHeader({
  className,
}) {
  return (
    <header
      className={classNames('pt-4', className)}
    >
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
				{/* Brand and toggle get grouped for better mobile display */}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="/">Renter's Rights Guide</a>
				</div>

				{/* Collect the nav links, forms, and other content for toggling */}
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Resources</a></li>
						<li><a href="/faq">FAQ</a></li>
					</ul>
					</div>
				</div>
			</nav>
		</header>
  );
}
