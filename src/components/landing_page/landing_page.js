import React from 'react'
import { Fragment } from 'react'
import './styles.css'
import Header from '../header/header'
import Footer from '../shared/footer/footer'

export default function LandingPage() {
  return (
    <div className="body-landing">
      <Header />
      <Fragment>
        <div className="main-content-landing">
          <h2 className="titles-landing">Why should we stare the sky?</h2>
          <p className="text-landing">
            When I was a kid, I used to believe that I would be an astronaut.
            Who hasn't thought it? Actually, I didn't really know what I would
            be, but I had a dream: to explore the unknown. Part of being human
            beings is exploring yourself and your arounds.
          </p>
          <p className="text-landing">
            A Professor in Modern Languages School once told me that there are
            few questions that really move the world. Who are we? What's our
            mission in this world? Is there a mission to guide us through this
            short life span?
          </p>

          <p className="text-landing">
            When you put things in perspective, you are able to see that some of
            those questions probably will not be be answered. However, our best
            shot to understand ourselves is looking both inside and above us,
            more expecifically to the sky. Few things are more compelling and
            exciting than those universal rules that turn existence possible.
          </p>
          <p className="text-landing">
            This project specifically is a way to approach Astronomy to the best
            scientists we have: our kids. I say they are the best scientists
            because they have an inner attraction to ask about things that seem
            obvious but we hardly ever know how to explain them.
          </p>
        </div>
        <Footer />
      </Fragment>
    </div>
  )
}
