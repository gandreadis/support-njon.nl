import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as PropTypes from 'prop-types'
import * as Isotope from 'isotope-layout';

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
      'Ik ben één van de vele jonge mensen voor wie het NJON ontzettend veel betekend heeft. Bij het JON krijgen middelbare scholieren de kans hun muzikale talenten op een hoog niveau te ontwikkelen en een onmisbare ervaring op te doen die nergens anders te vinden is. Door middel van uiterst leerzame repetities met een hoogstaande dirigent, prestatiedruk en het geven van concerten door heel Europa geeft het JON niet alleen een eerste stap in de professionele muziekwereld, maar draagt het bij aan een ervaring die in elke toekomstige carrière van toepassing zal zijn. Het NJO, wat elk seizoen gevuld is met fanatieke conservatorium studenten, geeft de studenten de kans om op het hoogste niveau te repeteren, netwerken en presteren. Het is voor hun van groot belang om deze ervaring op te doen en zich daardoor veel beter te kunnen voorbereiden op een carrière in professionele orkesten. Beide orkesten zijn praktisch gezien onmisbaar geweest in de levens van duizenden succesvolle muzikanten!',
    name: 'Emma Steinmann',
    occupation: '',
    age: '20',
  },
]

const Item = ({ text, name, occupation, age }) => (
  <div className={`text-white p-1 grid-item ${text.length > 500 ? 'grid-item--width2' : ''}`}>
    <div className="p-2 bg-dark">
      <p
        className="lead"
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
  </div>
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

  componentDidMount() {
    this.iso = new Isotope('.grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
  }

  componentDidUpdate() {
    this.iso.layout();
  }

  render() {
    let { intl } = this.props

    return (
      <Container>
        <Row className="pt-3" noGutters={true}>
          <Col className="text-right" xs={12}>
            <Link to="/submit" className="mr-sm-1 mb-xs-1">
              <Button variant="primary">
                {intl.formatMessage({ id: 'index.testimonials.short-submit' })}
              </Button>
            </Link>
            <br className="d-sm-none"/>
            <Button
              variant="secondary"
              onClick={() => {
                this.setState({ sortByTime: !this.state.sortByTime })

              }}
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
        <Row className="pb-3 grid">
          <div className="grid-sizer"/>
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
