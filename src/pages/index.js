import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { FaNewspaper } from 'react-icons/fa'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'
import Markdown from 'react-remarkable'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Testimonials from '../components/testimonials'
import Videos from '../components/videos'

const Index = ({ intl }) => (
  <Layout pageInfo={{ name: 'index' }}>
    <SEO title="Home" keywords={[`support njon`, `njon`, `jon`, `campagne`]} />
    <div className="image-jumbotron flex-shrink-0">
      <Container>
        <Row>
          <Col lg={7} xs={12} className="action-title align-self-center">
            <div className="mb-3">
              {intl.formatMessage({ id: 'generic.action-title' })}
            </div>
            <div>
              <div className="p-3 lead bg-primary d-inline-block">
                <h4>{intl.formatMessage({ id: 'index.action.title' })}</h4>
                1. {intl.formatMessage({ id: 'index.action.1' })}
                <br />
                2. {intl.formatMessage({ id: 'index.action.2' })}
                <br />
                3. {intl.formatMessage({ id: 'index.action.3' })}
                <br />
              </div>
            </div>
          </Col>
          <Col lg={5} xs={12} className="orchestras align-self-end pb-2">
            <div>Jeugdorkest Nederland</div>
            <div>Nationaal Jeugdorkest</div>
            <div>NJO Muziekzomer</div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <Row className="py-3">
        <Col xl={9} lg={8} md={7} sm={12}>
          <p className="lead pb-2">
            <Markdown>
              {intl.formatMessage({ id: 'index.explanation' })}
            </Markdown>
          </p>
        </Col>
        <Col xl={3} lg={4} md={5} sm={12}>
          <h4>
            <FaNewspaper className="mr-1" />
            {intl.formatMessage({ id: 'index.media.title' })}
          </h4>
          <p>
            <a
              href="https://www.jeugdorkest.nl/njon-tekenen-bezwaar-aan-tegen-negatief-bis-advies-raad-voor-cultuur/"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'index.media.njon' })}
            </a>
          </p>
          <p>
            <a
              href="https://www.njo.nl/BIS-advies"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'index.media.njo' })}
            </a>
          </p>
          <p>
            <a
              href="https://www.trouw.nl/ws-b546043d"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'index.media.trouw' })}
            </a>
          </p>
          <img
            src="/bis-advice.png"
            alt="BIS-advies"
            className="w-100 img-fluid"
            style={{
              borderWidth: 3,
              borderColor: '#000',
              borderStyle: 'solid',
            }}
          />
          <p className="py-1">
            <a
              href="https://www.raadvoorcultuur.nl/binaries/raadvoorcultuur/documenten/adviezen/2020/06/04/ontwikkelfunctie2/Advies+Nationale+Jeugdorkesten+Nederland+%282021-2024%29.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'index.bis-advice' })}
            </a>
          </p>
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
            <FacebookIcon size={48} round={true} className="mr-1" />
          </FacebookShareButton>
          <TwitterShareButton url="https://support-njon.nl">
            <TwitterIcon size={48} round={true} className="mr-1" />
          </TwitterShareButton>
          <EmailShareButton url="https://support-njon.nl">
            <EmailIcon size={48} round={true} className="mr-1" />
          </EmailShareButton>
          <WhatsappShareButton url="https://support-njon.nl">
            <WhatsappIcon size={48} round={true} className="mr-1" />
          </WhatsappShareButton>
          <TelegramShareButton url="https://support-njon.nl">
            <TelegramIcon size={48} round={true} className="mr-1" />
          </TelegramShareButton>
          <LinkedinShareButton url="https://support-njon.nl">
            <LinkedinIcon size={48} round={true} />
          </LinkedinShareButton>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default injectIntl(Index)
