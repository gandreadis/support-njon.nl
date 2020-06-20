import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as PropTypes from 'prop-types'

const ITEMS = [
  {
    text:
      'Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven.',
    age: 35,
    occupation: 'Violist',
  },
  {
    text:
      'Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven.',
    name: 'Charlie',
    age: 25,
    occupation: 'Violist',
  },
  {
    text: 'Super tof, moet blijven. Super tof, moet blijven.',
    occupation: 'Violist',
  },
  {
    text: 'Super tof, moet blijven, en ik hou van anonimiteit.',
  },
  {
    text: 'Super tof, moet blijven, en ik hou van anonimiteit.',
  },
  {
    text: 'Super tof, moet blijven, en ik hou van anonimiteit.',
  },
  {
    text:
      'Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven.',
    name: 'Alice',
    occupation: 'Violist',
  },
  {
    text: 'Super tof, moet blijven, en ik hou van anonimiteit.',
  },
]

const Item = ({ text, name, occupation, age }) => (
  <Col
    xl={3}
    lg={4}
    md={6}
    sm={12}
    className="text-white p-1 d-flex flex-column"
  >
    <div className="d-flex flex-column h-100 p-2 bg-dark">
      <p
        className="lead flex-fill"
        style={{ marginBottom: name || occupation ? 20 : 0 }}
      >
        {text}
      </p>
      {(name || occupation) && (
        <div className="lead text-right font-italic">
          {name && name + (age ? ` (${age})` : '') + (occupation ? ', ' : '')}
          {occupation}
        </div>
      )}
    </div>
  </Col>
)

class Testimonials extends React.Component {
  constructor(props) {
    super(props)

    this.state = { sortByTime: true }

    this.itemsByTime = [...ITEMS]
    this.itemsByName = [...ITEMS]
    this.itemsByName.sort((a, b) => {
      a.sortName = a.name
      if (a.sortName === undefined) {
        a.sortName = 'ZZZ'
      }
      b.sortName = b.name
      if (b.sortName === undefined) {
        b.sortName = 'ZZZ'
      }
      if (a.sortName < b.sortName) {
        return -1
      }
      if (a.sortName > b.sortName) {
        return 1
      }
      return 0
    })
  }

  render() {
    let { intl } = this.props

    return (
      <Container>
        <Row className="pt-3" noGutters={true}>
          <Col className="text-right" xs={12}>
            <Link to="/submit" className="mr-1">
              <Button variant="primary">
                {intl.formatMessage({ id: 'index.testimonials.short-submit' })}
              </Button>
            </Link>
            <Button
              variant="secondary"
              onClick={() =>
                this.setState({ sortByTime: !this.state.sortByTime })
              }
            >
              {intl.formatMessage({ id: 'index.testimonials.sort-by' })}{' '}
              {intl.formatMessage({
                id: `index.testimonials.sort-by-${
                  this.state.sortByTime ? 'date' : 'name'
                }`,
              })}
            </Button>
          </Col>
        </Row>
        <Row className="pb-3">
          {(this.state.sortByTime ? this.itemsByTime : this.itemsByName).map(
            (item, idx) => (
              <Item
                text={item.text}
                name={item.name}
                age={item.age}
                occupation={item.occupation}
                key={idx}
              />
            )
          )}
        </Row>
      </Container>
    )
  }
}

Testimonials.propTypes = { intl: PropTypes.any }

export default injectIntl(Testimonials)
