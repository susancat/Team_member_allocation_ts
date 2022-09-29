import { Form } from 'react-bootstrap'
import { useState } from 'react'

interface TeamSelectProps{
  selectedTeam: string;
  handleTeamSelectionChange: any
}
const TeamSelect = (props: TeamSelectProps) => {
  return (
      <Form.Select 
        size="lg" 
        aria-label="select a team" 
        value={props.selectedTeam}
        onChange={props.handleTeamSelectionChange} 
        style={{width:'80%'}} 
        className='m-auto mb-3'
      >
        <option>Team {props.selectedTeam}</option>
        <option value="A">Team A</option>
        <option value="B">Team B</option>
        <option value="C">Team C</option>
        <option value="D">Team D</option>
      </Form.Select>
  )
}

export default TeamSelect