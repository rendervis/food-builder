import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "../../../components/UI/buttons/buttons.component";

import axios from "axios";
import Spinner from "../../../components/UI/spinner/spinner.component";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Octa",
        address: {
          street: "testStreet1",
          zipCode: "13413242",
          country: "Romania",
        },
        email: "test@test.com",
      },
    };
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="street" placeholder="Your street" />
        <input type="text" name="postal" placeholder="Your postal Code" />
        <Button success clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <ContactDataStyled>
        <h4>Enter your contact data</h4>
        {form}
      </ContactDataStyled>
    );
  }
}

const ContactDataStyled = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 400px;
  }
`;

export default ContactData;
