import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const Footer = ({ intl }) => (
  <footer className="text-muted pt-3 pb-1">
    <p>
      {intl.formatMessage({ id: 'footer.initiators' })}: Hugo Pieters & Tjeerd
      Broerse
      <br/>
      {intl.formatMessage({ id: 'footer.website' })}
      {': '}
      <a href="https://gandreadis.com" target="_blank" rel="noreferrer">
        Georgios Andreadis
      </a>
      <br/>
      {intl.formatMessage({ id: 'footer.photographer' })}
      {' '}
      <a href="https://klari.net" target="_blank" rel="noreferrer">
        Nic Limper
      </a>
    </p>
    <p>{intl.formatMessage({ id: 'footer.disclaimer' })}</p>
  </footer>
)

export default injectIntl(Footer)
