import React from 'react'
import Section from '../Section'

export default ({ head, body }) => {
  return (
    // TODO: Let's be less optinionated about it being fullheight and the body having the text
    // centered and receive that data as params.
    <Section className="hero is-fullheight">
      <div className="hero-head">
        {head}
      </div>
      <div className="hero-body has-text-centered">
        {body}
      </div>
    </Section>
  )
}
