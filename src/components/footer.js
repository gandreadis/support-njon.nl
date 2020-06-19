import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const Footer = ({ intl }) => (
  <footer className="text-muted pt-3 pb-1">
    <p>
      <em>{intl.formatMessage({ id: 'footer.initiators' })}: </em>
      Hugo Pieters & Tjeerd Broerse
    </p>
    <p>
      <em>{intl.formatMessage({ id: 'footer.website' })}: </em>
      <a href="https://gandreadis.com">Georgios Andreadis</a>
    </p>
    <p>{intl.formatMessage({ id: 'footer.disclaimer' })}</p>
  </footer>
)

export default injectIntl(Footer)
