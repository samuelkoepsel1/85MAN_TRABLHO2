import React from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form, Image } from 'react-bootstrap'
import aluno from '../../images/aluno.jpg'
import styles from "./Styles"

function CadastrosAluno() {
  const history = useHistory()

  const routeQuestionario = () => {
    history.push('/home/questionario')
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
          <h1 style={styles.headerApp}>Dados Pessoais</h1>
        </div>
        <Row>
          <Col>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>Código</Form.Label>
                    <Form.Control placeholder="código" />
                  </Form.Group>
                </Form>
              </Col>
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
                    <Form.Label>Data Nasc</Form.Label>
                    <Form.Control placeholder="dd/mm/aaaa" />
                  </Form.Group>
                </Form>
              </Col>          <Col>
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control placeholder="sexo" />
                  </Form.Group>
                </Form>
              </Col>          <Col>
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>Ativo/Inativo</Form.Label>
                    <Form.Control placeholder="ativo/inativo" />
                  </Form.Group>
                </Form>
              </Col>          <Col>
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>Fone</Form.Label>
                    <Form.Control placeholder="fone" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>Celular</Form.Label>
                    <Form.Control placeholder="celular" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>e-mail</Form.Label>
                    <Form.Control type="email" placeholder="e-mail" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
          <Image src={aluno} style={{ position: "absolute", height: '25vh', width: '50vh', top: 180, right: 350 }}></Image>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Cidade</Form.Label>
                <Form.Control placeholder="cidade" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>UF</Form.Label>
                <Form.Control placeholder="uf" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>CEP Rua</Form.Label>
                <Form.Control placeholder="cep" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Rua</Form.Label>
                <Form.Control placeholder="rua" />
              </Form.Group>
            </Form>
          </Col>          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Número</Form.Label>
                <Form.Control placeholder="numero" />
              </Form.Group>
            </Form>
          </Col>          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Bairro</Form.Label>
                <Form.Control placeholder="bairro" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={routeQuestionario}>Próximo</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CadastrosAluno;
