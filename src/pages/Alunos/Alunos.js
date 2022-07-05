import React from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form, Image } from 'react-bootstrap'
import styles from "./Styles"

function Alunos() {
    const history = useHistory()

    const routeMatriculaALuno = () => {
        history.push('/home/matriculaaluno')
    }

    const stylees = {
        navbar: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px'
        }
    }
    return (
        <>
            <Navbar />
            <Container fluid="sm" style={styles.cont}>
                <Row style={styles.row}>
                    <Col>
                        <Button onClick={routeMatriculaALuno}>Matricula Alunos</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Alunos;
