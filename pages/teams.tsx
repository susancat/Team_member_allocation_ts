import { useState, useEffect } from 'react'

import Header from '../components/Header'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

interface TeamProps {
    employees: any;
    selectedTeam: string | null;
    setTeam: any
}
const Teams = (props: TeamProps) => {
    const { employees, selectedTeam, setTeam } = props
    const [groupedEmployees, setEmployeeGroups] = useState(groupTeamMembers())

    function groupTeamMembers() {//must be function rather than const
        let teams: Array<any> = []
        let teamAMembers = employees.filter((employee: any) => employee.team === 'A')
        let teamA = {
            team: 'A',
            members: teamAMembers,
            active: selectedTeam === 'A'? true : false,
        }
        teams.push(teamA)

        let teamBMembers = employees.filter((employee: any) => employee.team === "B")
        let teamB = {
            team: 'B',
            members: teamBMembers,
            active: selectedTeam === 'B'? true : false,
        }
        teams.push(teamB)

        let teamCMembers = employees.filter((employee: any) => employee.team === 'C')
        let teamC = {
            team: 'C',
            members: teamCMembers,
            active: selectedTeam === 'C'? true : false,
        }
        teams.push(teamC)

        let teamDMembers = employees.filter((employee: any) => employee.team === 'D')
        let teamD = {
            team: 'D',
            members: teamDMembers,
            active: selectedTeam === 'D'? true : false,
        }
        teams.push(teamD)
        return teams
    }

    const handleTeamClick = (event: any) => {
        let transformedGroupData: any = groupedEmployees.map((groupedData: any) => groupedData.team === event.currentTarget.id ? 
            { ...groupedData, active: !groupedData.active } :
            groupedData
        ) 
        setEmployeeGroups(transformedGroupData)
        setTeam(event.currentTarget.id)
    }
  return (
    <Container className='mt-5 mb-3'>
        <Tab.Container id="teamMembers" defaultActiveKey="A">
            <Row className='ms-5 mt-5'>
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
                        Object.values(groupedEmployees[0].members).map((e: any, i: any) => (
                            <Col xs={6} md={4} key={i}>
                                <h3>{e.fullname}</h3>
                            </Col>
                        ))
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="B">
                    {
                        Object.values(groupedEmployees[1].members).map((e: any, i: any) => (
                            <Col xs={6} md={4} key={i}>
                                <h3>{e.fullname}</h3>
                            </Col>
                        ))
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="C">
                    {
                        Object.values(groupedEmployees[2].members).map((e: any, i: any) => (
                            <Col xs={6} md={4} key={i}>
                                <h3>{e.fullname}</h3>
                            </Col>
                        ))
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="D">
                    {
                        Object.values(groupedEmployees[3].members).map((e: any, i: any) => (
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