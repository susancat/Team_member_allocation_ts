import { Form } from 'react-bootstrap'

interface TeamSelectProps{
  selectedTeam: string;
  handleTeamSelectionChange: any
}
const TeamSelect = (props: TeamSelectProps) => {
  const { selectedTeam, handleTeamSelectionChange } = props
  return (
      <Form.Select 
        size="lg" 
        aria-label="select a team" 
        value={selectedTeam}
        onChange={handleTeamSelectionChange} 
        style={{width:'80%'}} 
        className='m-auto mb-3'
      >
        <option>Team {selectedTeam}</option>
        <option value="A">Team A</option>
        <option value="B">Team B</option>
        <option value="C">Team C</option>
        <option value="D">Team D</option>
      </Form.Select>
  )
}

export default TeamSelect