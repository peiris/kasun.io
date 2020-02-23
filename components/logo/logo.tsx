/* Import libraries */
import React, { Component } from 'react';
import Link from 'next/link';
import './logo.scss';

/* Import assets */
import LogoSVG from '@svgs/logo.svg';

/* Interfaces */
interface Props { }

/* Class */
export default class logo extends Component<Props> {
  render() {
    return (
      <Link href="/">
        <a className={'logo'}><LogoSVG width={'4vw'}/></a>
      </Link>
    )
  }
}
