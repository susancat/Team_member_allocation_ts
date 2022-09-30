import type { NextPage } from 'next'
import Header from '../components/Header'
import employeeList from '../data/employee.json'
import { useState, useEffect } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

const Teams: NextPage = () => {
    const [employees, setEmployees] = useState( employeeList || localStorage.getItem('employeeList'))
    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employeeList))
      },[employees])
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
                    {
                        employees.filter(employee => employee.team === "A").map((e: any, i: any) => (
                            <Col xs={6} md={4} key={i}>
                                <h3>{e.fullname}</h3>
                            </Col>
                        ))
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="B">
                    {
                        employees.filter(employee => employee.team === "B").map((e: any, i: any) => (
                            <Col xs={6} md={4} key={i}>
                                <h3>{e.fullname}</h3>
                            </Col>
                        ))
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="C">
                    {
                        employees.filter(employee => employee.team === "C").map((e: any, i: any) => (
                            <Col xs={6} md={4} key={i}>
                                <h3>{e.fullname}</h3>
                            </Col>
                        ))
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="D">
                    {
                        employees.filter(employee => employee.team === "D").map((e: any, i: any) => (
                            <Col xs={6} md={4} key={i}>
                                <h3>{e.fullname}</h3>
                            </Col>
                        ))
                    }
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
  );
}

export default Teams