import React , {useState} from "react";
import { Container } from "react-bootstrap";
import Stepper from "react-stepper-horizontal";
import ShippingForm from "./shipping_form";
import PaymentForm from "./payment_form";
import ReviewForm from "./review_form";
import { AnimatePresence } from "framer-motion";
import '../styles/formStyle.css';

const divStyle = {
  center_ic_fa: {
    display: "flex",
    alignItems: "center",
  },
  hr: {
    width: "100%",
    color: "grey",
  },
  btn: {
    backgroundColor: 'white', /* Blue background */
    border: 'none', /* Remove borders */
    color: '#6B584C', /* White text */ /* Set a font size */
    cursor: 'pointer',/* Mouse pointer on hover */
  }
};

function ReturnCurrentForm({level, setFormLevel}) {
    switch(level) {
        case 1:
          return (
            <PaymentForm setFormLevel={setFormLevel}/>
          )
        case 2:
            return (
                <ReviewForm setFormLevel={setFormLevel}/>
            )
        default:
            return (
                <ShippingForm setFormLevel={setFormLevel}/>
            )
    } 
}

function navigateBack({formLevel,setFormLevel}){
    console.log('on Click',formLevel)
    if(formLevel===1){
        setFormLevel(0)
    }else if(formLevel === 2){
        setFormLevel(1)
    }
}


function NavigateBackIcon({level}) {
    if(level===0){
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
            >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        );
    }else{
        return(
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
            >
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        );
    }
}

export default function CheckOutComp() {
    const [formLevel, setFormLevel ] = useState(0)

  return (
    // <Container fluid className="m-0 p-xs-0 ps-sm-1 pe-sm-1 ps-md-5 pe-md-5 form-style">
    //   <Container fluid className="m-1 p-xs-0 ps-sm-1 pe-sm-1 ps-md-5 pe-md-5 form-style">
    <Container fluid className="form-style">
      <Container fluid className="">
        <div className="pt-3 pb-4 mt-3 mb-4">
          <Stepper
            steps={[
              { title: "Shipping" },
              { title: "Payment" },
              { title: "Review" },
            ]}
            activeStep={formLevel}
            size={12}
            circleFontSize={0}
            activeColor="#6B584C"
            completeColor="#A4957A"
            circleFontColor="#6B584C"
          />
        </div>
        
        <div style={divStyle.center_ic_fa}>
        <button style={divStyle.btn} onClick={ () => navigateBack({formLevel,setFormLevel})}>
            <NavigateBackIcon level={formLevel}/>
        </button>
          <span style={{ fontSize: "30px", color: "#4A4A4A" }}> Checkout </span>
        </div>

        <hr />

        
        <AnimatePresence>
          <ReturnCurrentForm level={formLevel} setFormLevel={setFormLevel} />
        </AnimatePresence>

      </Container>

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg> */}
    </Container>
  );
}
