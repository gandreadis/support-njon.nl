import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as PropTypes from 'prop-types'

const ITEMS = [
  {
    text:
      'Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven. Super tof, moet blijven.',
    name: 'Henk',
    age: 5,
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
  }

  render() {
    let { intl } = this.props
    const sortedItems = [...ITEMS]
    if (!this.state.sortByTime) {
      sortedItems.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    }

    return (
      <Container>
        <Row className="pt-3" noGutters={true}>
          <Col className="text-right" xs={12}>
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
          {sortedItems.map((item, idx) => (
            <Item
              text={item.text}
              name={item.name}
              age={item.age}
              occupation={item.occupation}
              key={idx}
            />
          ))}
        </Row>
      </Container>
    )
  }
}

Testimonials.propTypes = { intl: PropTypes.any }

export default injectIntl(Testimonials)
