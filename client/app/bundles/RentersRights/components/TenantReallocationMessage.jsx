import Navbar from './Navbar';
import React from 'react';

export default function TenantReallocationMessage({
  className,
}) {
  return (
    <div className={className}>
      <div className="container">
        <strong>
          <p>Yes, unfortunately your landlord can evict you by law, but
          based on the reasons they stated, they owe you reallocation money.
          </p>
          <p>We recommend that you confirm with a legal advisor</p>
        </strong>
      </div>
    </div>
  );
}
