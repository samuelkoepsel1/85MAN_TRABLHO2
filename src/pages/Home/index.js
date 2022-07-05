import { Container } from 'react-bootstrap';
import Navbar from '../../components/NavBar/Navbar';


function Home() {
  return (
    <>
      <Navbar nome={"usuario.nome"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }} >
        <Container
          style={{
            display: "grid",
            justifyContent: "center"
          }}
        >
        </Container>
      </div>
    </>
  );
}

export default Home;
