import classNames from 'classnames';
import React from 'react';

export default function Navbar({
  className,
}) {
  return (
    <div className={classNames('navbar navbar-light navbar-toggleable bg-faded', className)}>
      <a
        className="navbar-brand"
        href="/"
      >
        Renter's Rights
      </a>
    </div>
  );
}
