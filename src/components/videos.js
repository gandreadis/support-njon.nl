import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import YouTube from 'react-youtube'

const Video = ({ id }) => <YouTube videoId={id} className="w-75" />

const Videos = () => (
  <div className="bg-dark text-light flex-shrink-0">
    <Container>
      <Carousel interval={null} className="p-0 mx-auto row w-100">
        <Carousel.Item className="text-center">
          <Video id="Xg_Xkh39qPQ" />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Video id="9li3kxCPFbo" />
        </Carousel.Item>
      </Carousel>
    </Container>
  </div>
)

export default Videos
