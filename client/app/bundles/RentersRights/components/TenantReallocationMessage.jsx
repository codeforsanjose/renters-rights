import React from 'react';
import RentersLayout from './RentersLayout';

export default function TenantReallocationMessage({
  className,
}) {
  return (
    <RentersLayout className={className}>
      <strong>
        <p>Yes, unfortunately your landlord can evict you by law, but
        based on the reasons they stated, they owe you reallocation money.
        </p>
        <p>We recommend that you confirm with a legal advisor</p>
      </strong>
    </RentersLayout>
  );
}
