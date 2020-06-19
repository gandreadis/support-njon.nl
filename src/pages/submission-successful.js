import React from 'react'

import { injectIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'

const SubmissionSuccessful = ({ intl }) => (
  <Layout
    pageInfo={{
      name: 'submission-successful',
      title: intl.formatMessage({ id: 'submission-successful.title' }),
    }}
  >
    <SEO title={intl.formatMessage({ id: 'submission-successful.title' })} />
    <h3>
      {intl.formatMessage({ id: 'submission-successful.thanks' })}{' '}
      <span role="img" aria-label="joy">
        🤩🎉
      </span>
    </h3>
    <p className="lead">
      {intl.formatMessage({ id: 'submission-successful.explanation' })}
    </p>
    <Link to="/">
      <Button variant="primary">
        <FaHome className="mr-1" />
        {intl.formatMessage({ id: 'submission-successful.return-home' })}
      </Button>
    </Link>
  </Layout>
)

export default injectIntl(SubmissionSuccessful)
