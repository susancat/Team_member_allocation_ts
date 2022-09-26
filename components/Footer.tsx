import { Container, Row, Col } from 'react-bootstrap'

interface FooterProps{}

const Footer = (props: FooterProps) => {

    let today = new Date();
  
    return (
      <Container>
        <Row className="row justify-content-center mt-3 mb-4">
          <Col className="xs-8">
            <h5>Team Member Allocation App - {today.getFullYear()}</h5>
          </Col>
        </Row>
      </Container>
    )
  
  }

export default Footer