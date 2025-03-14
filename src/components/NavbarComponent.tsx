'use client';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image
              src="/web2_150x@2x.avif"
              alt="Salvage Public"
              width={150}
              height={60}
              className="logo"
              priority={true} // Ensures the logo is preloaded
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Link href="/" passHref><Nav.Link active>Home</Nav.Link></Link>
            <Link href="/shop" passHref><Nav.Link>Shop</Nav.Link></Link>
            <Link href="/lookbook" passHref><Nav.Link>Lookbook</Nav.Link></Link>
            <Link href="/playlists" passHref><Nav.Link>Playlists</Nav.Link></Link>
            <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"><i className="bi bi-search"></i></Nav.Link>
            <Nav.Link href="#"><i className="bi bi-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
