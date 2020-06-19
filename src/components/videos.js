import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'
import YouTube from 'react-youtube'
import Carousel from 'react-bootstrap/Carousel'

const Video = ({ id }) => <YouTube videoId={id} className="w-75" />

const Videos = ({ intl }) => (
  <div className="bg-dark text-light">
    <Container>
      <Carousel interval={null} className="p-0 mx-auto row w-100">
        <Carousel.Item className="text-center">
          <Video id="2g811Eo7K8U" />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Video id="2g811Eo7K8U" />
        </Carousel.Item>
      </Carousel>
    </Container>
  </div>
)

export default injectIntl(Videos)
