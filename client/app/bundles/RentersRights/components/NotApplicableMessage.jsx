import React from 'react';
import RentersLayout from './RentersLayout';

export default function NotApplicableMessage({
  className,
}) {
  return (
    <RentersLayout
      className={className}
    >
      <div className="container">
        <strong>
          We're sorry, but we don't cover homes outside San Jose yet.
        </strong>
        <p>
          Please review our resource guide and consider following us on social media to stay updated on further developments.
        </p>
        <p>
          <a href="/">
            &laquo; Back to home page
          </a>
        </p>
      </div>
    </RentersLayout>
  );
}
