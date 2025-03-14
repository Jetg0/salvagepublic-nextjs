'use client';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Link from 'next/link';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-light text-center">
      <Container>
        <Row className="p-4">
          <Col>
            <h5>SUBSCRIBE TO OUR NEWSLETTER & GET 10% OFF YOUR FIRST ORDER</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="address">1170 Auahi Street, Honolulu, Hawaii 96814</p>
            <p className="hours">Hours 11am - 6pm</p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col><Link href="#" passHref><Nav.Link className="text-dark">Search</Nav.Link></Link></Col>
          <Col><Link href="#" passHref><Nav.Link className="text-dark">Shipping, Returns & Exchanges</Nav.Link></Link></Col>
          <Col><Link href="#" passHref><Nav.Link className="text-dark">About</Nav.Link></Link></Col>
        </Row>
        <Row className="social-icons">
          <Col>
            <Link href="https://facebook.com" passHref><Nav.Link className="text-dark"><i className="bi bi-facebook"></i></Nav.Link></Link>
            <Link href="https://instagram.com" passHref><Nav.Link className="text-dark"><i className="bi bi-instagram"></i></Nav.Link></Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="design-tag mt-3">DESIGNED BY HAWAIIANS</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
