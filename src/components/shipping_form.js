import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      duration: 1
    }
  },
}

export default function ShippingForm({setFormLevel}) {
  return (
    <motion.div 
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h6 style={{ color: "#4A4A4A", fontWeight: 500, marginBottom: '20px'  }}>
          Where this order going ?
      </h6>
      <Form>
        <Row className="m-0">
          <Col xs={6} sm={6} md={6} className="m-0 mb-2 p-0 pe-2">
            <Form.Control size="md" type="text" placeholder="First Name" />
          </Col>
          <Col xs={6} sm={6} md={6} className="m-0 mb-2 p-0 pe-2">
            <Form.Control size="md" type="text" placeholder="Last Name" />
          </Col>

          <Col xs={6} sm={6} md={6} className="m-0 mb-2 p-0 pe-2">
            <Form.Control size="md" type="text" placeholder="Address" />
          </Col>
          <Col xs={6} sm={6} md={6} className="m-0 mb-2 p-0 pe-2">
            <Form.Control
              size="md"
              type="text"
              placeholder="Apt / Floor / Suite"
            />
          </Col>

          <Col xs={6} sm={6} md={4} className="m-0 mb-1 p-0 pe-1">
            <select className="form-select" aria-label="Default select example">
              <option selected>City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
          <Col xs={6} sm={6} md={4} className="m-0 mb-1 p-0 pe-1">
            <select className="form-select" aria-label="Default select example">
              <option selected>State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
          <Col xs={6} sm={6} md={4} className="m-0 mb-1 p-0 pe-1">
            <select className="form-select" aria-label="Default select example">
              <option selected>Zip Code</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
        </Row>

        <div className="d-none d-sm-none d-md-block">
          <div className="d-flex justify-content-end ">
            <Button
              style={{ backgroundColor: "#6B584C", border: 0, borderRadius: 0 }}
              size="lg"
              variant="primary"
              type="submit"
              className="px-5 m-0"
              onClick={()=>setFormLevel(1)}
            >
              Next
            </Button>
          </div>
        </div>

        <div className="d-block d-sm-block d-md-none">
          <div className="d-flex justify-content-center ">
            <Button
              style={{ backgroundColor: "#6B584C", border: 0, borderRadius: 0 }}
              size="lg"
              variant="primary"
              type="submit"
              className="px-5 m-0"
              onClick={()=>setFormLevel(1)}
            >
              NEXT
            </Button>
          </div>
        </div>
      </Form>
    </motion.div>
  );
}
