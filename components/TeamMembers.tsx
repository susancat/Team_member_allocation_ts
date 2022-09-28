import employees from '../data/employee.json'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TeamMemberCard from './TeamMemberCard'
//employees fetched represent the original team group
const TeamMembers = () => {
    return(
        <Container>
            <Row>
            {
                employees.map((employee, i) => (
                    <Col xs={6} md={4} key={i} >
                        <TeamMemberCard   
                            gender={employee.gender} 
                            fullName={employee.fullname} 
                            designation={employee.designation} 
                            team={employee.team}
                            updatedTeam={employee.updatedTeam}
                        />
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

export default TeamMembers