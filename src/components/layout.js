/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Container } from 'react-bootstrap'

import Navbar from './navbar'

import '../styles/style.scss'
import { Helmet } from 'react-helmet'
import Footer from './footer'

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#f07f03" />

          <html className="is-fullheight" lang="nl" />
          <body className="is-fullheight bg-light" />
        </Helmet>
        <Navbar pageInfo={pageInfo} />
        <div className="is-fullheight main-content">
          <main>
            {pageInfo.title ? (
              <Container className="mt-5">
                {pageInfo.title && <h1 className="mt-3">{pageInfo.title}</h1>}
                {children}
              </Container>
            ) : (
              <>{children}</>
            )}
          </main>
          <div className="bg-light flex-shrink-0">
            <Container>
              <Footer />
            </Container>
          </div>
        </div>
      </>
    )}
  />
)

export default Layout
