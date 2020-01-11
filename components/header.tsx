/* Import libraries */
import React, { Component } from 'react';
import Link from 'next/link';

/* Interfaces */
interface Props { }


/* const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
); */

// export default Header;


/* Class */
export default class Header extends Component<Props> {
  render() {
    return (
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </header>
    )
  }
}