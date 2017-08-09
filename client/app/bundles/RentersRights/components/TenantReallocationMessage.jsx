import React from 'react';
import RentersLayout from './RentersLayout';

export default function TenantReallocationMessage({
  className,
}) {
  return (
    <RentersLayout className={className}>
      <div className="home-links">
        <p>Yes, unfortunately your landlord can evict you by law, but
        based on the reasons they stated, they owe you reallocation money.
        </p>
        <p/>
        <p>Please confirm with a legal advisor and refer to our list of <a href="#">resources</a></p>
      </div>
    </RentersLayout>
  );
}
