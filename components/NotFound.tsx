import { Container, Row, Col } from 'react-bootstrap'

interface NotFoundProps{}
const NotFound = (props: NotFoundProps) => {

    return (
      <Container>
        <Row className="justify-content-center mt-3 mb-4">
          <Col className="xs-8">
            <h1 className="text-danger">404 - Page not found</h1>
          </Col>
        </Row>
      </Container>
    )
  
  }
  export default NotFound