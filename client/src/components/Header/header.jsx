import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <Navbar expand="lg" style={{
            backgroundColor: '#734444',
            zIndex: '1000',      // Ensure it's above other content
            position: 'fixed',   // Fix the header at the top of the page
            top: '0',            // Align to the top
            width: '100%',       // Ensure it spans the entire width
            boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.75)'
        }}>
        
            <Container>
                {/* Brand with inline styles for depth and modern design */}
                <Navbar.Brand href="/" style={{
                    fontSize: '1.75vmax',
                    color: '#EEEDBE',
                    fontWeight: '600',
                    textShadow: '5px 5px 3px rgba(0, 0, 0, 0.6)',
                    transition: 'transform 0.3s ease, text-shadow 0.3s ease'
                }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}> 
                    Deco Borders & Concrete, Ltd.
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }}>
                    {/* Toggler button with custom icon and original box shadow */}
                    <span className="navbar-toggler-icon" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",  // Black lines for inversion effect
                        border: 'none',
                        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',  // Original darker shadow
                        outline: 'none',
                        backgroundColor: '#EEEDBE',  // Light background color for contrast
                        borderRadius: '3px',  // Rounds the edges
                        transition: 'transform 0.3s ease'
                    }}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* Nav links with modern styles */}
                        <Nav.Link href="/" style={{
                            fontSize: '1vmax',
                            color: '#EEEDBE',
                            fontWeight: '500',
                            textShadow: '5px 5px 3px rgba(0, 0, 0, 0.6)',
                            padding: '0.5rem 1rem',
                            transition: 'color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease',
                            cursor: 'pointer'
                        }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}> 
                            Home
                        </Nav.Link>
                        <Nav.Link href="/#/reviews" style={{
                            fontSize: '1vmax',
                            color: '#EEEDBE',
                            fontWeight: '500',
                            textShadow: '5px 5px 3px rgba(0, 0, 0, 0.6)',
                            padding: '0.5rem 1rem',
                            transition: 'color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease',
                            cursor: 'pointer'
                        }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}> 
                            Reviews
                        </Nav.Link>
                        <Nav.Link href="/#/contact" style={{
                            fontSize: '1vmax',
                            color: '#EEEDBE',
                            fontWeight: '500',
                            textShadow: '5px 5px 3px rgba(0, 0, 0, 0.6)',
                            padding: '0.5rem 1rem',
                            transition: 'color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease',
                            cursor: 'pointer'
                        }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}> 
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
