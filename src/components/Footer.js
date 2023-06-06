import {Container, Col, Row} from "react-bootstrap"


export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <Row>
                <Col>
                    <a href="https://www.linkedin.com/in/alex-moriyama/">LinkedIn</a>
                </Col>
                <Col>
                    <a href="https://github.com/alexmoriyama">GitHub</a>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer