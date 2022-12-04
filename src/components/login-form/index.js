import { useState } from "react"
import StarbucksInput from "../starbucks-input"

const LoginForm = ({ handleLogin = () => { } }) => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [emailError, setEmailError] = useState("");

    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email);

    console.log(isValidEmail)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail) {
            setEmailError("not a valid email");
            return;
        }
        handleLogin(formData)
    };
    const submitDisabled = () => {
        return formData.name === "" || formData.email === "";
    }
    const handleChange = (name, value) => setFormData(prev => ({ ...prev, [name]: value }))

    return (
        <form onSubmit={handleSubmit} data-testid='form'>
            <StarbucksInput name="name" onChange={handleChange} value={formData.name} />
            <StarbucksInput name="email" onChange={handleChange} value={formData.email} error={emailError} />
            <button type="submit" disabled={submitDisabled()}>Submit</button>
        </form >
    )
}

export default LoginForm