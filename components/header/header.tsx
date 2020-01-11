/* Import libraries */
import React, { Component } from 'react';

/* Import components */
import Nav from '../nav/nav';

/* Interfaces */
interface Props { }

/* Class */
export default class Header extends Component<Props> {
  render() {
    return (
      <header>
        <Nav />
      </header>
    )
  }
}