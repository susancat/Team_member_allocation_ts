import { useState } from "react"
import { Dropdown } from 'react-bootstrap'

interface TeamDropDownProps{}
const TeamDropDown = (props: TeamDropDownProps) => {
  const [team, setTeam] = useState("")
  const handleSelect = (e: any) => {
    setTeam(e);
    console.log(team);
  }
  return (
    <Dropdown className='d-flex justify-content-center mt-3 mb-3' onSelect={handleSelect} >
      <Dropdown.Toggle
        variant="light" 
        id="team" 
        style={{width: '50rem', height:'3rem', fontSize: '1.6rem'}}>
        Select a team
      </Dropdown.Toggle>

      <Dropdown.Menu style={{fontSize: '1.6rem'}}>
        <Dropdown.Item style={{width: '50rem'}} href="#teamA" eventKey="A">TeamA</Dropdown.Item>
        <Dropdown.Item href="#teamB" eventKey="B">TeamB</Dropdown.Item>
        <Dropdown.Item href="#teamC" eventKey="C">TeamC</Dropdown.Item>
        <Dropdown.Item href="#teamD" eventKey="D">TeamD</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default TeamDropDown