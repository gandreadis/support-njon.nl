import React from 'react'
import { injectIntl, IntlContextConsumer, Link } from 'gatsby-plugin-intl'

import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import LanguageSwitcher from './language'
import * as PropTypes from 'prop-types'
import { FaFacebook } from 'react-icons/fa'

const PETITION_COUNT = process.env.PETITION_COUNT

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { transparent: true }
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', () => {
      this.checkScrollState()
    })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.listener)
  }

  checkScrollState() {
    const scrolled = document.scrollingElement.scrollTop
    if (scrolled >= 120) {
      if (this.state.transparent) {
        this.setState({ transparent: false })
      }
    } else {
      if (!this.state.transparent) {
        this.setState({ transparent: true })
      }
    }
  }

  render() {
    let { pageInfo, intl } = this.props
    let petitionCount = PETITION_COUNT ? PETITION_COUNT : 0

    return (
      <>
        <Navbar
          bg={
            this.state.transparent && pageInfo.name === 'index'
              ? 'transparent'
              : 'secondary'
          }
          expand="md"
          id="site-navbar"
          fixed="top"
        >
          <Container>
            <Link
              to="/"
              style={{
                opacity:
                  this.state.transparent && pageInfo.name === 'index' ? 0 : 1,
              }}
            >
              <Navbar.Brand
                as="span"
                className="text-light"
                style={{ fontSize: '1.7rem' }}
              >
                {intl.formatMessage({ id: 'generic.title' })}
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" activeKey={pageInfo && pageInfo.name}>
                <IntlContextConsumer>
                  {({ language: currentLocale }) => (
                    <a
                      href={`https://petities.nl/petitions/de-nationale-jeugdorkesten-nederland-horen-thuis-in-de-basisinfrastructuur-bis?locale=${currentLocale}`}
                      className="btn btn-primary mr-1 mb-md-0 mb-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {intl.formatMessage({ id: 'nav.sign-petition' })}
                    </a>
                  )}
                </IntlContextConsumer>
                <div
                  className="bg-light py-1 px-2 mr-1 mb-md-0 mb-1"
                  title={intl.formatMessage({
                    id: 'nav.signatures.explanation',
                  })}
                >
                  {petitionCount}{' '}
                  {intl.formatMessage({ id: 'nav.signatures.label' })}
                </div>
                <a
                  href="https://www.facebook.com/Support-NJON-103100624793162/"
                  className="btn btn-dark mr-1 mb-md-0 mb-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook size={22} />
                </a>
                <LanguageSwitcher />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

CustomNavbar.propTypes = {
  pageInfo: PropTypes.any,
  intl: PropTypes.any,
}

export default injectIntl(CustomNavbar)
