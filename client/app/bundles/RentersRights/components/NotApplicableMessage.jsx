import React from 'react';
import RentersLayout from './RentersLayout';

export default function NotApplicableMessage({
  className,
}) {
  return (
    <RentersLayout
      className={className}
    >
      <div className="home-links">
        <div className="container">
          <strong>
            <h4>We're sorry, but we don't cover homes outside San José yet.</h4>
          </strong>
          <p>
            <h4>Please review our <a href="/resources">resource guide</a> and consider following us on <a href="https://twitter.com/codeforsanjose">Twitter</a> to stay updated on further developments.</h4>
          </p>
          <br/>
          <p>
            <a href="/">
              &laquo; Back to home page
            </a>
          </p>
        </div>
      </div>
    </RentersLayout>
  );
}
