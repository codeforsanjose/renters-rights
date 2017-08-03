import React from 'react';
import RentersFooter from './RentersFooter';
import RentersHeader from './RentersHeader';

export default function RentersLayout({
  children,
  className,
}) {
  return (
    <div
      className={className}
    >
      <RentersHeader />
      <div
        className="container"
      >
        {children}
      </div>
      <RentersFooter />
    </div>
  );
}
