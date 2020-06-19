import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { FaNewspaper } from 'react-icons/fa'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton, FacebookIcon, EmailIcon, WhatsappIcon,
  TwitterIcon, TelegramIcon, LinkedinIcon,
} from 'react-share'

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
            <h3 className="text-light">
              {intl.formatMessage({ id: 'index.testimonials.why-submit' })}
            </h3>
            <Link to="/submit">
              <Button size="lg" variant="primary">
                {intl.formatMessage({ id: 'index.testimonials.submit' })}
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <Row className="py-3">
        <Col className="text-center">
          <h3>{intl.formatMessage({ id: 'index.share.title' })}</h3>
          <FacebookShareButton url="https://support-njon.nl">
            <FacebookIcon size={48} round={true} className="mr-1"/>
          </FacebookShareButton>
          <TwitterShareButton url="https://support-njon.nl">
            <TwitterIcon size={48} round={true} className="mr-1"/>
          </TwitterShareButton>
          <EmailShareButton url="https://support-njon.nl">
            <EmailIcon size={48} round={true} className="mr-1"/>
          </EmailShareButton>
          <WhatsappShareButton url="https://support-njon.nl">
            <WhatsappIcon size={48} round={true} className="mr-1"/>
          </WhatsappShareButton>
          <TelegramShareButton url="https://support-njon.nl">
            <TelegramIcon size={48} round={true} className="mr-1"/>
          </TelegramShareButton>
          <LinkedinShareButton url="https://support-njon.nl">
            <LinkedinIcon size={48} round={true}/>
          </LinkedinShareButton>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default injectIntl(Index)
