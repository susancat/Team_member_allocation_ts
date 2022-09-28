import { Form } from 'react-bootstrap'
import { useState } from 'react'

interface TeamSelectProps{}
const TeamSelect = (props: TeamSelectProps) => {
  const [selectedTeam, setTeam] = useState('')
  const handleSelect = (e: any) => {
    setTeam(e.target.value)
    localStorage.setItem('selectedTeam', e.target.value)
  }
  return (
      <Form.Select 
        size="lg" 
        aria-label="select a team" 
        onChange={handleSelect} 
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