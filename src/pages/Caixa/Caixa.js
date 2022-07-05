import React from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form, Image } from 'react-bootstrap'
import styles from "./Styles"

function Cadastros() {
    const history = useHistory()

    const routeRecebimento = () => {
        history.push('/home/recebimento')
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
                <Row>
                    <Col>
                        <Button onClick={routeRecebimento}>Recebimento Mensalidades</Button>
                    </Col>
                    <Col>
                        <Button>Fluxo de Caixa</Button>
                    </Col>
                    <Col>
                        <Button>Controle de cheques</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cadastros;
