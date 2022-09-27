import { Container, Nav } from 'react-bootstrap'

interface NavbarProps {}
const Navbar = (props: NavbarProps) => {
    return(
      <Container>
        <Nav defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/team">Team</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    )
}

export default Navbar