import React from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import styles from "./Styles"

function Questionario() {
  const history = useHistory()

  const routeHome = () => {
    history.push('/home')
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
        <div style={stylees.navbar}>
          <h1 style={stylees.headerApp}>Questionário</h1>
        </div>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Aluno</Form.Label>
                <Form.Control placeholder="nome" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Tem plano de saúde?</Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Sim</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={1}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Não</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Qual?</Form.Label>
                <Form.Control placeholder="especifique" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Pratica esporte?</Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Sim</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={1}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Não</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Qual?</Form.Label>
                <Form.Control placeholder="especifique" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Por que faz academia?</Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Aprender a nadar</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Bronquite</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Coluna</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Obesidade</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Treinar</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Manter a forma</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Gestante</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Conselho médico</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Outros</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Especifique</Form.Label>
                <Form.Control placeholder="especifique" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Como soube da Academia?</Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Google</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>FaceBook</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Instagram</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Amigo</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Outdoor</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Outros</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Aluno da Academia</Form.Label>
                <Form.Check aria-label="option 1" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder="nome" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={routeHome}>Salvar</Button>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Questionario;
