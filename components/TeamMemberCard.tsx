import { Card } from 'react-bootstrap'

interface TeamMemberCardProps{
  employee: any;
  handleEmployeeCardClick: any;
  selectedTeam: string;
}
const TeamMemberCard = (props: TeamMemberCardProps) => {
  const { id, gender, fullname, designation, team } = props.employee
  const {selectedTeam, handleEmployeeCardClick} = props

  return (
    <Card 
      id={id}
      key={id}
      style={{width: '17rem', marginLeft:'auto', marginRight:'auto', cursor: 'pointer'}}
      className={(team === selectedTeam ? `mb-3 standout` : `mb-3`)}
      onClick={handleEmployeeCardClick}
    >
      {
        gender === "male"?
        <Card.Img className="m-auto" variant="top" src='/male_profile.png' style={{width: '15rem', height: '15rem'}} /> :
        <Card.Img className="m-auto" variant="top" src='/female_profile.png' style={{width: '15rem', height: '15rem'}} />
      }
     
      <Card.Body>
        <Card.Title className='text-center'>Full Name: {fullname}</Card.Title>
        <Card.Text className='text-center'>
            Designation: {designation}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TeamMemberCard