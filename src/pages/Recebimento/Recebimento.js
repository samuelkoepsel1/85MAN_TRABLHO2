import { Button, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/NavBar/Navbar';
import styles from "./Styles";

function Recebimento() {
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
                    <h1 style={stylees.headerApp}>Recebimento</h1>
                </div>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Venda para</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Aluno</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Lista de compras</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Table striped bordered hover style={styles.table}>
                        <thead>
                            <tr>
                                <th>Vencimento</th>
                                <th>Descrição</th>
                                <th>Valor Unitário</th>
                                <th>Qde</th>
                                <th>% Desc</th>
                                <th>Total</th>
                                <th>Pagar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8/3/2018</td>
                                <td>Par de Luvas</td>
                                <td>R$ 50,00</td>
                                <td>1</td>
                                <td>0</td>
                                <td>R$ 50,00</td>
                                <td>Sim</td>
                            </tr>

                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col xl={2}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Impressão</Form.Label>
                                <Form.Control type='number' placeholder='Nro vias' />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xl={3}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Pagamento com juros em R$</Form.Label>
                                <InputGroup className="mb-3">
                                    <DropdownButton
                                        variant="outline-secondary"
                                        title="Forma"
                                        id="input-group-dropdown-1"
                                    >
                                        <Dropdown.Item href="#">Dinheiro</Dropdown.Item>
                                        <Dropdown.Item href="#">Cartão</Dropdown.Item>
                                        <Dropdown.Item href="#">Pix</Dropdown.Item>
                                    </DropdownButton>
                                    <Form.Control aria-label="Text input with dropdown button" />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xl={2}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Total a pagar</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Container fluid="sm">
                        <Row>
                            <Col>
                                <Button>Receber</Button>
                            </Col>
                            <Col>
                                <Button>Impressora</Button>
                            </Col>
                            <Col>
                                <Button>Cancelar</Button>
                            </Col>
                            <Col>
                                <Button>Página Inicial</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>

        </>
    );
}

export default Recebimento;
