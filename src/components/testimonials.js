import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as PropTypes from 'prop-types'

const ITEMS = [
  {
    text:
      'In afgelopen jaren heeft NJON deuren voor mij geopend, waarvan ik niet eens wist dat ze bestonden. Ik heb geleerd samen te werken en mijn beste beentje vóór te zetten voor het geheel. Dit heeft mij een netwerk gebracht, waar ik ontzettend dankbaar voor ben en kracht uit kan putten op mijn weg naar een muzikale carrière. Zonder NJON zou ik niet daar zijn, waar ik nu ben.',
    name: 'Hugo Pieters',
    occupation:
      'NJO member, Jong Metropole lid, voormalig JONner en student Hoorn, Conservatorium Maastricht',
    age: '22',
  },
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
  <Col lg={4} md={6} sm={12} className="text-white p-1 d-flex flex-column">
    <div className="d-flex flex-column h-100 p-2 bg-dark">
      <p
        className="lead flex-fill"
        style={{ marginBottom: name || occupation ? 20 : 0 }}
      >
        {text}
      </p>
      {(name || occupation) && (
        <div className="lead text-right" style={{ fontSize: '1rem' }}>
          {name && name + (age ? ` (${age})` : '')}
          {occupation ? <br /> : undefined}
          <span className="font-italic">{occupation}</span>
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
