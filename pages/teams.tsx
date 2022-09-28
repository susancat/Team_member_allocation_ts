import Header from '../components/Header'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

const Teams = (selectedTeam: any) => {
  return (
    <Container className='mt-5 mb-3'>
        <Header selectedTeam="A" teamMemberCount={3} />
        <Tab.Container id="teamMembers" defaultActiveKey="A">
            <Row className='m-auto mt-5'>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="A">Team A</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="B">Team B</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="C">Team C</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="D">Team D</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="A">
                    someone from team A
                    </Tab.Pane>
                    <Tab.Pane eventKey="B">
                    someone from team B
                    </Tab.Pane>
                    <Tab.Pane eventKey="C">
                    someone from team C
                    </Tab.Pane>
                    <Tab.Pane eventKey="D">
                    someone from team D
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
  );
}

export default Teams