import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Coding from './components/Coding/Coding';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
// import CodeEditor from './components/Coding/CodeEditor';

function App() {
  return (
    <div className="App">
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-xxl">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */}

      {/* <Coding /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/codeEditor" element={<CodeEditor />} /> */}
      </Routes>

      {/* <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="flex-row justify-content-center">
          <h5 className='text-success text-center'>footer</h5>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default App;