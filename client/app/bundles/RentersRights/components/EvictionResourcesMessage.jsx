import Navbar from './Navbar';
import React from 'react';

export default function EvictionResourcesMessage({
  className,
}) {
  return (
    <div className={className}>
      <div className="container">
        <strong>
          <p>Yes, unfortunately your landlord can evict you by law. We recommend that you confirm with a legal advisor.</p>
          <p>In the meantime, please consider contacting a group in our resource guide that can help you find new housing.</p>
        </strong>
        <br/>
        <strong>Groups that can help you find new housing:</strong>
        <br/>
        <strong>Groups that can help you file a petition:</strong>
        <br/>
        <strong>Groups that can give you legal advice:</strong>
          <ul>
            <li><a href="https://baylegal.org/">Bay Area Legal Aid</a></li>
            <li><a href="http://www.lawfoundation.org/need-help-info/">Law Foundation of Silicon Valley</a></li>
          </ul>
      </div>
    </div>
  );
}
