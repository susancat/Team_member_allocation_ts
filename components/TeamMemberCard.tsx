import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

import style from '../styles/Home.module.css'

interface TeamMemberCardProps{
    gender: string;
    fullName: string;
    designation: string;
}
const TeamMemberCard = (props: TeamMemberCardProps) => {
  const [memberSelected, setMemberSelected] = useState('')
  const [cardSelected, setCardSelected] = useState(false)
  const handleSelect = (member: string) => {
    setMemberSelected(member)
    setCardSelected(!cardSelected)
  }
  return (
    <Card className={cardSelected === false? style.cardUnselected : style.cardSelected}>
      {
        props.gender === "male"?
        <Card.Img className="m-auto" variant="top" src='/male_profile.png' style={{width: '15rem', height: '15rem'}} /> :
        <Card.Img className="m-auto" variant="top" src='/female_profile.png' style={{width: '15rem', height: '15rem'}} />
      }
     
      <Card.Body>
        <Card.Title>Full Name: {props.fullName}</Card.Title>
        <Card.Text>
            Designation: {props.designation}
        </Card.Text>
        <Button variant="white" className='stretched-link' onClick={() => handleSelect(props.fullName)}></Button>
      </Card.Body>
    </Card>
  )
}

export default TeamMemberCard