import Navbar from "./nav_bar";
import { Container, Row, Col } from 'react-bootstrap';
import CheckOutComp from "./checkOutComp";
import OrderSummaryComp from "./orderSummaryComp";

function App() {
  return (
    <div style={{padding:0, margin:0}}>
      <Navbar/>
      <Container fluid  className='p-0 m-0 d-flex justify-content-center'>
        <Row style={{width:'100%', margin:0, padding:0}}>

          <Col sm={12} md={8} style={{margin:0, padding:0}} className='align-items-center' >
            <CheckOutComp/>
          </Col>

          <Col sm={12} md={4} style={{margin:0, padding:0}}>
            <OrderSummaryComp/>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
