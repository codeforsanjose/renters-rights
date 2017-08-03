import classNames from 'classnames';
import React from 'react';

export default function RentersHeader({
  className,
}) {
  return (
    <header
      className={classNames('pt-4', className)}
    >
      <h1>
        Renter's Rights
      </h1>
    </header>
  );
}
