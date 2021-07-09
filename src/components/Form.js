import React, { useState } from "react";


const Form = props =>{
    const [ userInput, userState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    
    const onChange = (e) =>{
        userState({
            ...userInput,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = e => {
        e.preventDefault();
        console.log(userInput);
    }

    return(
    <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName"/>
                {(userInput.firstName.length === 0 || userInput.firstName.length < 2) ? <p>Length must be at least 2 characters long</p>: <p>&nbsp;</p>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName"/>
                {(userInput.lastName.length === 0 || userInput.lastName.length < 2) ? <p>Length must be at least 2 characters long</p>: <p>&nbsp;</p>}

            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email"/>
                {(userInput.email.length === 0 || userInput.email.length < 5) ? <p>Length must be at least 5 characters long</p>: <p>&nbsp;</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="text" name="password"/>
                {(userInput.password.length === 0 || userInput.password.length < 8) ? <p>Length must be at least 8 characters long</p>: <p>&nbsp;</p>}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="text" name="confirmPassword"/>
                {userInput.confirmPassword === userInput.password ? true :<p>Passwords must match perfectly</p>}
            </div>
            <input type="submit"/>
        </form>
        <div>
            <p>First Name: { userInput.firstName }</p>
            <p>Last Name: { userInput.lastName }</p>
            <p>Email: { userInput.email }</p>
            <p>Password: { userInput.password }</p>
        </div>

</div>

    );
};
export default Form;