import { Container, Row, Col } from 'react-bootstrap'

import TeamMemberCard from './TeamMemberCard'
//employees fetched represent the original team group

interface TeamMembersProps{
    employees: any;
    selectedTeam: string | null;
    handleEmployeeCardClick: any 
}

const TeamMembers = (props: TeamMembersProps) => {
    const { employees, handleEmployeeCardClick, selectedTeam  } = props
    return(
        <Container>
            <Row>
            {
                employees.map((employee: any, i: any) => (
                    <Col xs={6} md={4} key={i}>
                        <TeamMemberCard   
                            employee={employee}
                            handleEmployeeCardClick={handleEmployeeCardClick}
                            selectedTeam={selectedTeam}
                        />
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

export default TeamMembers