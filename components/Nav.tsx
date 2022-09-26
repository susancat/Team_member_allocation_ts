import { Nav } from 'react-bootstrap'

interface NavbarProps {}
const Navbar = (props: NavbarProps) => {
    return(
        <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="team">Team</Nav.Link>
      </Nav.Item>
    </Nav>
    )
}

export default Navbar