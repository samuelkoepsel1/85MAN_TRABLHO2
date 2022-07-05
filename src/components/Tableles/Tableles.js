import Table from 'react-bootstrap/Table';
import { Button, Form, Row, Col, Container } from 'react-bootstrap'
import styles from './Styles'

function Tableles() {
    return (
        <>
            <Table striped bordered hover style={styles.table}>
                <thead>
                    <tr>
                        <th>cod</th>
                        <th>Atividade</th>
                        <th>Local Atividade</th>
                        <th>Dia semana</th>
                        <th>Início</th>
                        <th>Final</th>
                        <th>Professor</th>
                        <th>V Dis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>127</td>
                        <td>Boxe Cirvuito</td>
                        <td>Sala de Lutas</td>
                        <td>Seg</td>
                        <td>08:10</td>
                        <td>09:10</td>
                        <td>Paulo Cintura</td>
                        <td>0</td>
                    </tr>

                </tbody>
            </Table>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Horário Atividade/Equipamento em que o aluno está matriculado</Form.Label>
                </Form.Group>
            </Form>
            <Table striped bordered hover style={styles.table}>
                <thead>
                    <tr>
                        <th>Atividade</th>
                        <th>Local Atividade</th>
                        <th>Dia semana</th>
                        <th>Início</th>
                        <th>Final</th>
                        <th>Professor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Boxe Cirvuito</td>
                        <td>Sala de Lutas</td>
                        <td>Seg</td>
                        <td>08:10</td>
                        <td>09:10</td>
                        <td>Paulo Cintura</td>
                    </tr>

                </tbody>
            </Table>
            <Container fluid="sm">
                <Row>
                    <Col>
                        <Button>Pesquisar</Button>
                    </Col>
                    <Col>
                        <Button>Gravar</Button>
                    </Col>
                    <Col>
                        <Button>Cancelar</Button>
                    </Col>
                    <Col>
                        <Button>Excluir</Button>
                    </Col>
                    <Col>
                        <Button>Alt Horário</Button>
                    </Col>
                    <Col>
                        <Button>Rematricular</Button>
                    </Col>
                    <Col>
                        <Button>Página Inicial</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Tableles;