/* Import libraries */
import React, { Component } from 'react';
import './section-about.scss';
import GitHubIcon from '@svgs/github.svg';
import TwitterIcon from '@svgs/twitter.svg';
import InstagramIcon from '@svgs/instagram.svg';
import LinkedInIcon from '@svgs/linkedin.svg';

/* Interfaces */
interface Props { }

/* Class */
export default class SectionAbout extends Component<Props> {
  render() {
    return (
      <>
        <div id="about" className="section-wrapper">
          <section className={'section-about'}>
            {/* <span className="section-about__image" data-speed="3">
              <img src="/img/photo-1569343285904-001a0ee57edc.jpeg"/>
            </span> */}

            <h3 className={'section-about__sub-heading'} style={{ paddingTop: '3vw' }}>
              About
            </h3>

            <span className={'section-about__number'}>01</span>

            <h2 id="reveal1" className={'section-about__heading viewport-heading'}>
              <div data-splitting>Kasun</div>
              <div data-splitting>Peiris</div>
            </h2>

            <p className={'section-about__description'}>
              Hi, I’m a full-stack engineer and a designer based in Colombo, Sri Lanka. Currently working full-time as senior tech-lead for UI-engineering team at Amplifyn, a digital product company.

              {/* <span className="lg-green" data-speed="1" style={{'transform': 'rotate(45deg)'}}></span> */}
              {/* <span className="lg-img" data-speed="1" style={{'background': 'url(https://github.blog/wp-content/themes/github-blog/assets/images/dot-left-corner.png)'}}></span> */}
            </p>
          </section>
        </div>
        
        <div id="services" className="section-wrapper">
          <section className={'section-about'}>
          {/* <span className="section-about__image section-about__image--left">
            <img src="/img/photo-1553798179-7e3cc2c3f89a.jpeg"/>
          </span> */}
          
          <h3 className={'section-about__sub-heading'}>
            Services
          </h3>

          <span className={'section-about__number'}>02</span>

          <h2 className={'section-about__heading non-viewport-heading services-heading'}>
            <div data-splitting>Exper</div>
            <div data-splitting>-tise</div>
          </h2>

          <div className={'section-about__stat'}>
            <span className="section-about__stat__number">7</span>
            <span className="section-about__stat__label">Years</span>
          </div>

          <p className={'section-about__description section-about__description--right'}>
            Design, strategy, management, creative direction &amp; development are my specialties, and I've been honing in my skills for about almost 7 years. In all my projects, I find that efficient work-flows, excellent communication and a dose of self-discipline are key - a strong work ethic has driven my success in a myriad of specialties.
        </p>

          <ul className={'section-about__list'}>
            <li key={1}>User experience design</li>
            <li key={2}>UI engineering</li>
            <li key={3}>Front-end architecturing</li>
            <li key={4}>MERN / MEAN stack</li>
            <li key={5}>Mobile app engineering</li>
            <li key={6}>DigitalOcean &amp; AWS</li>
          </ul>
        </section>
        </div>
        
        <div id="work" className="section-wrapper">
          <section className={'section-about'}>
          <h3 className={'section-about__sub-heading'}>
            Personal projects
        </h3>

          <span className={'section-about__number'}>03</span>

          <h2 className={'section-about__heading non-viewport-heading'}>
            <div data-splitting>Port-</div>
            <div data-splitting>folio</div>
          </h2>

          <ul className={'section-about__list'} style={{ paddingTop: 0 }}>
            <li>WhatTheHex?! <span>Case-study coming soon</span></li>
            <li>Karapincha UI <span>Case-study coming soon</span></li>
            <li>Pimp My Quote <span>Case-study coming soon</span></li>
            <li>Slack That Banner <span>Case-study coming soon</span></li>
            <li>Invoice It <span>Case-study coming soon</span></li>
          </ul>
        </section>
        </div>
        
        <div id="contact" className="section-wrapper">
          <section className={'section-about'}>
          <h3 className={'section-about__sub-heading'}>
            Say Hello
          </h3>

          <span className={'section-about__number'}>04</span>

          <h2 className={'section-about__heading non-viewport-heading'}>
            <div data-splitting>Let's</div>
            <div data-splitting>Talk</div>
          </h2>

          <div className={'section-about__info-chip'}>
            <label className={'section-about__info-chip__label'}>Business enquiries</label>

            <h2 className={'section-about__info-chip__value'}><a href="mailto:hello@kasun.io">work@kasun.io</a></h2>
          </div>

          <div className={'section-about__info-chip'}>
            <label className={'section-about__info-chip__label'} style={{ marginBottom: '2vw' }}>Connect</label>

            <br />

            <ul className={'section-about__icon-list'}>
              <li><a href="http://github.com/peiris" target="_blank"><GitHubIcon width={'2.6vw'} height={'2.6vw'} /></a></li>
              <li><a href="https://twitter.com/peiris__" target="_blank"><TwitterIcon width={'2.6vw'} height={'2.6vw'} /></a></li>
              <li><a href="https://www.instagram.com/peiris__/" target="_blank"><InstagramIcon width={'2.6vw'} height={'2.6vw'} /></a></li>
              <li><a href="https://www.linkedin.com/in/kasunharshana/" target="_blank"><LinkedInIcon width={'2.6vw'} height={'2.6vw'} /></a></li>
            </ul>
          </div>
        </section>
        </div>
      </>
    )
  }
}
