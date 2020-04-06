import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Search from './Search';
import Container from './Container';

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Search />
      <Container />
    </div>
  );
}
