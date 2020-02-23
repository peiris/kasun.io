/* Import libraries */
import React, { Component } from 'react';
import Link from 'next/link';
import './nav.scss';

/* Interfaces */
interface Props { }

/* Class */
export default class nav extends Component<Props> {
  render() {
    return (
      <nav className={'nav'}>
        <ul className={'nav__list'}>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
          <li>
            <Link href="/services"><a>Services</a></Link>
          </li>
          <li>
            <Link href="/work"><a>Work</a></Link>
          </li>
          <li>
            <Link href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </nav>
    )
  }
}
