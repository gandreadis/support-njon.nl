import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import LanguageSwitcher from './language'
import * as PropTypes from 'prop-types'

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { transparent: true }
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', (e) => {
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
            <Link to="/">
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
                <a
                  href="https://petities.nl"
                  className="btn btn-primary mr-1 mb-md-0 mb-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {intl.formatMessage({ id: 'nav.sign-petition' })}
                </a>
                <div className="bg-light py-1 px-2 mr-1 mb-md-0 mb-1">
                  9999 {intl.formatMessage({ id: 'nav.signatures' })}
                </div>
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
