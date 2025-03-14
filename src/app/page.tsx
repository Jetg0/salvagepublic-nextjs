'use client';

import { Col, Container, Image, Row } from 'react-bootstrap';

import NavbarComponent from '../components/NavbarComponent';
import HeroSection from '../components/HeroSection';
import FooterComponent from '../components/FooterComponent';

export default function Home() {
  return (
    <>
      <div className="text-center py-2 bg-light">
        FREE DOMESTIC SHIPPING ON ORDERS OVER $100
      </div>
      <NavbarComponent />
      <HeroSection />
      <FooterComponent />
    </>
  );
}
