import { IntlProvider } from 'react-intl';
import messages from '../messages.json';
import React from 'react';
import RentersFooter from './RentersFooter';
import RentersHeader from './RentersHeader';

export default function RentersLayout({
  availableLocales,
  children,
  className,
  locale,
}) {
  return (
    <IntlProvider
      key={locale}
      locale={locale}
      messages={messages[locale]}
    >
      <div
        className={className}
      >
        <RentersHeader
          availableLocales={availableLocales}
          locale={locale}
        />
        <div
          className="container"
        >
          {children}
        </div>
        <RentersFooter />
      </div>
    </IntlProvider>
  );
}
