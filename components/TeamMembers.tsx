import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TeamMemberCard from './TeamMemberCard'
//employees fetched represent the original team group

interface TeamMembersProps{
    employees: any
}

const TeamMembers = (props: TeamMembersProps) => {
    const { employees } = props
    console.log(employees)
    return(
        <Container>
            <Row>
            {
                employees.map((employee: any, i: any) => (
                    <Col xs={6} md={4} key={i} >
                        <TeamMemberCard   
                            gender={employee.gender} 
                            fullName={employee.fullname} 
                            designation={employee.designation} 
                            team={employee.team}
                        />
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

export default TeamMembers