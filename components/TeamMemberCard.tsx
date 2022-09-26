import { Card } from 'react-bootstrap';

interface TeamMemberCardProps{
    image: string;
    fullName: string;
    designation: string;
}
const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} style={{width: '15rem', height: '15rem'}} />
      <Card.Body>
        <Card.Title>Full Name: {props.fullName}</Card.Title>
        <Card.Text>
            Designation: {props.designation}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default TeamMemberCard