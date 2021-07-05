import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./item_card";


export default function orderSummaryComp() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#E3DED5", height: "100vh", maxWidth: "100%" }}
      className="pt-5 pb-xs-5 ps-xs-1 pe-xs-1 ps-sm-1 pe-sm-1 pt-sm-5 ps-lg-5 pe-lg-5 pt-lg-5"
    >
      {/* className="pt-xs-5 pb-xs-5 ps-xs-1 pe-xs-1 ps-sm-1 pe-sm-1 pt-sm-5 ps-lg-5 pe-lg-5 pt-lg-5 " */}
      
      <h5>Order Summary - 2 items</h5>
      <hr />
      <Container fluid className="p-0 m-0 d-flex justify-content-center">
        <Row className="p-0 m-0">

            <ItemCard/>
          
            <ItemCard/>

        </Row>
      </Container>

      <hr />

      <div className="m-3">
        <div className="d-flex justify-content-between">
          <h6>Subtotal</h6>
          <h6>--</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Tax</h6>
          <h6>--</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Shipping</h6>
          <h6>--</h6>
        </div>
        <hr />

        <div className="d-flex justify-content-between">
          <h6>Total</h6>
          <h6>--</h6>
        </div>

        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-outline-secondary">
            Continue Shopping
          </button>
        </div>
      </div>
    </Container>
  );
}
// style={{backgroundColor:'red'}}
