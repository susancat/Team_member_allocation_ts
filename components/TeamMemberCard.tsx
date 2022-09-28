import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'

import style from '../styles/Home.module.css'

interface TeamMemberCardProps{
    gender: string;
    fullName: string;
    designation: string;
    team: string;
    updatedTeam: string
}
const TeamMemberCard = (props: TeamMemberCardProps, selectedTeam: string) => {
  const [cardSelected, setCardSelected] = useState(false)
  useEffect(() => {
    tranverseTeam()
  }, [selectedTeam])
  useEffect(() => {
    teamUpdate()
 }, [cardSelected])

 const tranverseTeam = () => {

 }
  const handleSelect = () => {
    setCardSelected(!cardSelected)
  }

  const teamUpdate = () => {
    switch (selectedTeam) {
      case'A':

    }
    // localStorage.setItem('selectedEmployee', JSON.stringify({
    //   gender: props.gender,
    //   fullName: props.fullName,
    //   designation: props.designation,
    //   originalTeam: props.originalTeam,
    //   cardSelected,
    //   selectedTeam: localStorage.getItem('selectedTeam')
    // }))
  }

  return (
    <Card 
      className={cardSelected === false? style.cardUnselected : style.cardSelected}
    >
      {
        props.gender === "male"?
        <Card.Img className="m-auto" variant="top" src='/male_profile.png' style={{width: '15rem', height: '15rem'}} /> :
        <Card.Img className="m-auto" variant="top" src='/female_profile.png' style={{width: '15rem', height: '15rem'}} />
      }
     
      <Card.Body>
        <Card.Title className='text-center'>Full Name: {props.fullName}</Card.Title>
        <Card.Text className='text-center'>
            Designation: {props.designation}
        </Card.Text>
        <Button 
          variant="white" 
          className='stretched-link' 
          onClick={() => handleSelect()}
          style={{zIndex:'-1'}}
        ></Button>
      </Card.Body>
    </Card>
  )
}

export default TeamMemberCard