import React from 'react';
import RentersLayout from './RentersLayout';

export default function EvictionResourcesMessage({
  className,
}) {
  return (
    <RentersLayout className={className}>
      <div className="home-links">
        <p>Yes, your landlord can legally evict you.
        <p/>
         Please confirm with a legal advisor and refer to our list of <a href="#">resources.</a>
        </p>
      </div>
    </RentersLayout>
  );
}
