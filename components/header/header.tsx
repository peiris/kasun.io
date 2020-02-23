/* Import libraries */
import React, { Component } from 'react';

/* Import components */
import Nav from '../nav/nav';
import Logo from '../logo/logo';

/* Interfaces */
interface Props { }

/* Class */
export default class Header extends Component<Props> {
  render() {
    return (
      <header>
        <Logo />
        <Nav />
      </header>
    )
  }
}