import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render (<CheckoutForm />);
        const header = getByText(/checkout form/i)
        expect(header).toBeInTheDocument();  
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText, getByRole, getByTestId} = render(<CheckoutForm />);

    const first = getByLabelText(/first name/i)
    const last = getByLabelText(/last name/i)
    const address = getByLabelText(/address/i)
    const city = getByLabelText(/city/i)
    const state = getByLabelText(/state/i)
    const zip = getByTestId(/zip/)

    fireEvent.change(first, { target: {value: 'Nick'}})
    fireEvent.change(last, { target: {value: 'Ohman'}})
    fireEvent.change(address, { target: {value: '2210 wow st'}})
    fireEvent.change(city, { target: {value: 'Fargo'}})
    fireEvent.change(state, { target: {value: 'ND'}})
    fireEvent.change(zip, { target: {value: '58102'}})
    

    const submit = getByRole('button');
    fireEvent.click(submit);
    const success = getByTestId(/successMessage/i)
    expect(success).toBeInTheDocument();

});
