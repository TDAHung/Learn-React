import '../assets/footer.css'
import React from 'react';
import { Button, Col, Row } from 'reactstrap';

const Footer = () => {
    return (
        <Row className="row">
            <Col>2 items left</Col>
            <Col>
                <Button color="danger">All</Button>
                <Button color="success">Active</Button>
                <Button color="primary">Completed</Button>
            </Col>
            <Col><Button color="warning">Clear Completed</Button></Col>
        </Row>);
}

export default Footer;