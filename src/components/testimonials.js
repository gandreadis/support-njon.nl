import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as PropTypes from 'prop-types'
import * as Isotope from 'isotope-layout'

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
  {
    text:
      'Het JON en het NJO zijn voor mij onmisbaar geweest in mijn ontwikkeling als musicus, zowel op muzikaal als persoonlijk vlak. Hier heb ik geleerd om in een (koper-)groep te functioneren, hetgeen van fundamenteel belang is voor een orkestmusicus. In een professioneel orkest, waar de projecten elkaar in rap tempo opvolgen, heb je immers niet de tijd om dit te leren. Onder begeleiding van kundige coaches en dirigenten ging er voor mij in dit opzicht een wereld open.  De onvergetelijke repetities, concerten en tournees hebben een blijvende indruk gelaten, waar ik met ongelofelijk veel plezier aan terugdenk. Maar ook de vele blijvende vriendschappen die in deze jeugdorkesten zijn ontstaan, zijn van grote invloed geweest op mijn leven. Ik kan me niet voorstellen dat ik zonder de ervaring in deze orkesten professioneel (orkest)musicus had kunnen worden. Dat gun ik de huidige en toekomstige generaties jonge musici natuurlijk ook. Daarom mogen onze nationale Jeugdorkesten nooit verdwijnen!',
    name: 'Wouter Iseger',
    occupation:
      '(contra-)bastrombonist Nederlands Philharmonisch Orkest / Nederlands Kamerorkest',
    age: '42',
  },
  {
    text:
      "Het NJO is voor mij een zeer waardevolle ervaring geweest naast mijn tijd op de conservatoria. Hier leerde ik al vroeg op hoog niveau samen spelen met musici van over de hele wereld. Ik heb goede herinneringen aan de kundige coaches en dirigenten en de mooie concertprogramma's die wij op podia door het hele land hebben gespeeld. Ook zorgde het bij mij voor een besef dat ik harder moest werken, en kwam ik na ieder project weer terug met een grote dosis motivatie om net weer een tandje bij te zetten. Ik denk dat het veilig is om te zeggen dat ik zonder het NJO nooit de muzikant was geworden die ik nu ben.  Ik gun iedereen die ervaring.",
    name: 'Martijn Appelo',
    occupation: 'Freelance hoornist',
    age: '28',
  },
  {
    text:
      "Als nét 16-jarig meisje uit Twente kwam ik terecht in het Jeugdorkest Nederland. Het was voor het eerst dat ik met 'lotgenoten' muziek maakte; leeftijdsgenoten die ook maar één ding wilden, namelijk; mooie muziek maken. Natuurlijk gaat het hebben van een gezamenlijke passie gepaard met een hoop gezelligheid en verbinding, waardoor je de tijd in het orkest echt nooit meer zult vergeten. Na 3 jaar was een mooi vervolg op het JON het NJO. Het JON heeft mij onder andere geïnspireerd tot een vervolgstudie aan het Conservatorium van Amsterdam en uiteindelijk in het buitenland.  Ik kan gerust zeggen dat ik in beide orkesten 'vrienden voor het leven' heb gemaakt en een deel van deze mensen zijn nu mijn collega's in de beroepsorkesten. We blikken nog vaak terug op de tijd in een van de orkesten van de NJON. De NJON is van onschatbare grote waarde voor een voortzetting van ieders muzikale ontwikkeling!!",
    name: 'Rebecca Fransen',
    occupation:
      'Professioneel musicus / Contrabassist in Phion, orkest van Gelderland en Overijssel',
    age: '27',
  },
  {
    text:
      'Van mijn 13e tot mijn 20e speelde ik in het JON. Ik heb daar een enorme persoonlijke en muzikale ontwikkeling kunnen meemaken. Ben gegroeid van tutti speler naar aanvoerder en concertmeester. Een enorme educatieve ontwikkeling, mag je dat toch wel noemen. Daarna heb ik ook nog jaren in het NJO gespeeld.  Altijd onder leiding van de meest inspirerende dirigenten muziek maken op zeer hoog niveau. Met vrienden. Gelijkgestemden. Die elkaar bij de orkesten vinden in plaats van het buitenbeentje te zijn op school.  Alle kansen die de jeugdorkesten aan jonge musici bieden. De tournees, de concerten. Onvergetelijke herinneringen.  Er is de tijd om het repertoire echt te leren kennen. En veel repertoire kennis op te doen. In de professionele orkesten teer je nog op die kennis!  NJON is een enorme kweekvijver voor de professionele wereld!  Zonder die orkesten zou ik nooit zijn wat ik nu ben! Een echte orkest musicus! Die muziek en die manier van spelen zit in mijn DNA. Dankzij NJON!',
    name: 'Hester van der Vlugt',
    occupation: '1e violiste bij het Nederlands Philharmonisch Orkest',
    age: '38',
  },
  {
    text:
      'Bij het NJON worden nieuwe generaties musici gecreëerd. De enorm inspirerende omgeving en de unieke ervaringen die het NJON biedt aan jonge, talentvolle musici, maken dat de orkesten van Nederland steeds weer aangevuld kunnen worden met talenten die zich dankzij organisaties als NJON hebben kunnen ontwikkelen. NJON draagt zo onmisbaar bij aan de toekomst van het Nederlandse muziekleven. Het niet willen subsidiëren van zo’n ongelooflijk belangrijke zaak is een grove fout en getuigt van een gebrek aan lange termijn visie op de Nederlandse muziekwereld.',
    name: 'Rogier van Gulick',
    occupation: 'Muziekwetenschapper',
    age: '27',
  },
]

const Item = ({ text, name, occupation, age }) => (
  <div
    className={`text-white grid-item ${
      text.length > 700 ? 'grid-item--width2' : ''
    }`}
  >
    <div className="p-1">
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
        columnWidth: '.grid-sizer',
      },
    })
  }

  componentDidUpdate() {
    this.iso.layout()
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
            <br className="d-sm-none" />
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
          <div className="grid-sizer" />
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
