import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { injectIntl } from 'gatsby-plugin-intl'
import { Button, Form } from 'react-bootstrap'
import * as PropTypes from 'prop-types'

const MAX_LENGTH = 1000

class Submit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { textLength: 0 }
  }

  onTextEntry(event) {
    const textLength = event.target.value.length
    this.setState({ textLength })
  }

  render() {
    let { intl } = this.props
    return (
      <Layout
        pageInfo={{
          name: 'submit',
          title: intl.formatMessage({ id: 'submit.title' }),
        }}
      >
        <SEO title={intl.formatMessage({ id: 'submit.title' })} />
        <Form
          name="testimonial"
          data-netlify="true"
          method="POST"
          action="/submission-successful"
        >
          <Form.Group controlId="formText">
            <Form.Label>
              {intl.formatMessage({ id: 'submit.text.label' })}{' '}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="text"
              as="textarea"
              placeholder={intl.formatMessage({
                id: 'submit.text.placeholder',
              })}
              required
              maxlength={MAX_LENGTH}
              onChange={this.onTextEntry.bind(this)}
            />
            <Form.Text className="text-muted">
              {intl.formatMessage({ id: 'submit.text.explanation' })}
              {': '}
              {this.state.textLength}
              {' / '}
              {MAX_LENGTH}
            </Form.Text>
          </Form.Group>

          <h4>{intl.formatMessage({ id: 'submit.personal.title' })}</h4>
          <p className="text-muted">
            {intl.formatMessage({ id: 'submit.personal.subtitle' })}
          </p>

          <Form.Group controlId="formName">
            <Form.Label>
              {intl.formatMessage({ id: 'submit.name.label' })}
            </Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder={intl.formatMessage({
                id: 'submit.name.placeholder',
              })}
            />
            <Form.Text className="text-muted">
              {intl.formatMessage({ id: 'submit.name.explanation' })}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formOccupation">
            <Form.Label>
              {intl.formatMessage({ id: 'submit.occupation.label' })}
            </Form.Label>
            <Form.Control
              name="occupation"
              type="text"
              placeholder={intl.formatMessage({
                id: 'submit.occupation.placeholder',
              })}
            />
            <Form.Text className="text-muted">
              {intl.formatMessage({ id: 'submit.occupation.explanation' })}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>
              {intl.formatMessage({ id: 'submit.age.label' })}
            </Form.Label>
            <Form.Control
              name="age"
              type="number"
              placeholder={intl.formatMessage({ id: 'submit.age.placeholder' })}
            />
            <Form.Text className="text-muted">
              {intl.formatMessage({ id: 'submit.age.explanation' })}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formConfirm">
            <Form.Check
              type="checkbox"
              label={
                <span>
                  {intl.formatMessage({ id: 'submit.confirm' })}{' '}
                  <span className="text-danger">*</span>
                </span>
              }
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {intl.formatMessage({ id: 'submit.button' })}
          </Button>
        </Form>
      </Layout>
    )
  }
}

Submit.propTypes = { intl: PropTypes.any }

export default injectIntl(Submit)
