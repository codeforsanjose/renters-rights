import Navbar from './Navbar';
import React from 'react';

export default function NotApplicableMessage({
  className,
}) {
  return (
    <div className={className}>
      <Navbar className="mb-4" />
      <div className="container">
        <h5>
          We're sorry, but we don't cover homes outside San Jose yet.
        </h5>
        <p>
          Please review our resource guide and consider following us on social media to stay updated on further developments.
        </p>
        <p>
          <a href="/">
            &laquo; Back to home page
          </a>
        </p>
      </div>
    </div>
  );
}
