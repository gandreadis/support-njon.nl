import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { FaNewspaper } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Testimonials from '../components/testimonials'
import Videos from '../components/videos'

const Index = ({ intl }) => (
  <Layout pageInfo={{ name: 'index' }}>
    <SEO title="Home" keywords={[`support njon`, `njon`, `jon`, `campagne`]} />
    <div className="image-jumbotron" />
    <Container>
      <Row className="py-3">
        <Col>
          <p className="lead pb-2">
            {intl.formatMessage({ id: 'index.explanation' })}
          </p>
          <a
            href="https://www.jeugdorkest.nl/njon-tekenen-bezwaar-aan-tegen-negatief-bis-advies-raad-voor-cultuur/"
            target="_blank"
            rel="noreferrer"
          >
            <FaNewspaper className="mr-1" />
            {intl.formatMessage({ id: 'index.njon-post' })}
          </a>
        </Col>
      </Row>
    </Container>
    <Videos />
    <Testimonials />
    <div className="bg-dark">
      <Container>
        <Row className="py-5">
          <Col className="text-center">
            <h4 className="text-light">
              {intl.formatMessage({ id: 'index.testimonials.why-submit' })}
            </h4>
            <Link to="/submit">
              <Button size="lg" variant="primary">
                {intl.formatMessage({ id: 'index.testimonials.submit' })}
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default injectIntl(Index)
