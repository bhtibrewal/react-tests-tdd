import { fireEvent, getByLabelText, getByTestId, getByText, render, } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginForm from "./index";

describe("login form validation", () => {
    test("it checks button disabled on not valid email ", async () => {
        // Assemble
        const { getByRole } = render(<LoginForm />)
        // Act
        const submitBtn = getByRole("button", { type: "submit" })
        // Assert
        expect(submitBtn).toBeDisabled()
    })
    test("it check field errors", async () => {
        // assemble
        const { getByRole, getByLabelText, getByText } = render(<LoginForm />);
        const nameInput = getByLabelText(/Name/i);;
        const emailInput = getByLabelText(/email/i);
        const submitBtn = getByRole("button", { type: "submit" })

        // act
        await act(async () => {
            fireEvent.change(nameInput, { target: { value: "Bhavika" } });
            fireEvent.change(emailInput, { target: { value: "bhtibrewal@gmail.com" } });
        })
        await act(async () => {
            fireEvent.click(submitBtn);
        })

        // assert
        expect(getByText("not a valid email")).toBeInTheDocument()
    })
    test('it checks fire submit', async () => {
        // assemble
        const { getByRole, getByLabelText, getByTestId } = render(<LoginForm />);

        const nameInput = getByLabelText(/Name/i);;
        const emailInput = getByLabelText(/email/i);
        const submitBtn = getByRole("button", { type: "submit" })
        const handleSubmit = jest.fn();
        const handleLogin = jest.fn()

        // act
        await act(async () => {
            fireEvent.change(nameInput, { target: { value: "Bhavika" } });
            fireEvent.change(emailInput, { target: { value: "bhtibrewal@gmail.com" } });
        })
        await act(async () => {
            fireEvent.submit(getByTestId("form"));
        })
        // assert
        expect(submitBtn).toBeEnabled();
        expect(handleSubmit).toBeCalledTimes(1);


    })
})