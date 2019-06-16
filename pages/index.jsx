import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import Header from '../components/Header/Header';
import About from '../components/About/About';

const Home = () => (
  <div>
    <Head title="Fullstack web developer | dacturne" />
    {/* <Nav /> */}

    <div className="parallax">
      <Header style={{ height: '100vh' }} />
      <div className="spacer" style={{ height: '75vh' }} />
      <About style={{ height: '100vh' }} />
    </div>
    <style global jsx>{`
    html, body { margin: 0; padding: 0; }
    body {
      font-family: 'Baloo';
      color: #fafafa;
    }
    `}</style>
    <style global jsx>{`
    .parallax {
      background: linear-gradient(120deg, #2c273c 0%, #174364 100%);
    }
    `}</style>
  </div>
)

export default Home
