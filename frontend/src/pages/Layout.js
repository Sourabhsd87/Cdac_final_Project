import { Outlet, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function MyComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand>
  <Link to="/" style={{ textDecoration: 'none',color:'#fff' }}>
  {/* /pngtree-instagram-social-media-icon-png-image_3572487.jpg */}
    <img src="../favicon.gif" type="image/gif" alt="Road Mate" width="50" height="50" />RoadMate
  </Link>
</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
  <NavDropdown.Item href="https://readyassist.in" target="_blank" rel="noopener noreferrer" className="nav-link-dd">Road Side Assistance</NavDropdown.Item>
  <NavDropdown.Item href="https://www.oyorooms.com/" target="_blank" rel="noopener noreferrer" className="nav-link-dd">Hotels</NavDropdown.Item>
  <NavDropdown.Item><Link to="/garages" className="nav-link-dd">Garages</Link></NavDropdown.Item>
  <NavDropdown.Item><Link to="/signup" className="nav-link-dd">Trip Planner</Link></NavDropdown.Item>
  <NavDropdown.Item href="https://www.showaround.com/" target="_blank" rel="noopener noreferrer" className="nav-link-dd">Local Travel Guide</NavDropdown.Item>
</NavDropdown>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/gallery" className="nav-link-dd">Gallery</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/mustvisitlocations" className="nav-link-dd">Must Visit Locations</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/community" className="nav-link-dd">Community</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/contactus" className="nav-link-dd">Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/aboutus" className="nav-link-dd">About Us</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function MyFooter() {
  return (
    <footer style={{  backgroundColor: "#343a40", left: 0, bottom: 0, width: "100%", color: "#fff", fontSize: "14px", paddingTop: "5px" }}>
      <div className="containerFooter">
        <div className="rowFooter">
          <div className="col-md-6">
            <p>&copy; 2023 Road Mate</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ display: "inline-block", marginRight: "1rem" }}><a href="#privacy" style={{ textDecoration: "none", color: "#fff" }}>Privacy Policy</a></li>
              <li style={{ display: "inline-block", marginRight: 0 }}><a href="#terms" style={{ textDecoration: "none", color: "#fff" }}>Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}



const Layout = () => {
  return (
    <>
      <MyComponent />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default Layout;
