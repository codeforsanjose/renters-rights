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
          <p className="language-paragraph">
          We're sorry, but we don't cover homes outside San José yet.
          </p>
          <p className="language-paragraph">
          Please review our <a href="/resources">resource guide</a> and consider following us on <a href="https://twitter.com/codeforsanjose">Twitter</a> to stay updated on further developments.
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
