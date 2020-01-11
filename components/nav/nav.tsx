/* Import libraries */
import React, { Component } from 'react';
import Link from 'next/link';

/* Interfaces */
interface Props { }

/* Class */
export default class nav extends Component<Props> {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/"><a>K.</a></Link>
          </li>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
          <li>
            <Link href="/work"><a>Work</a></Link>
          </li>
          <li>
            <Link href="/services"><a>Services</a></Link>
          </li>
          <li>
            <Link href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </nav>
    )
  }
}
