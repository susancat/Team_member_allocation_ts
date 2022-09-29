import { Container } from 'react-bootstrap'

interface HeaderProps{
    selectedTeam: string;
    teamMemberCount: number
}
const Header = (props: HeaderProps) => {
    return(
        <Container>
            <h1>Team Member Allocation</h1>
            <h3>
                Team {props.selectedTeam} has {props.teamMemberCount} 
                {props.teamMemberCount === 1? 
                " member" : " member" }
            </h3>
        </Container>
    )
}

export default Header