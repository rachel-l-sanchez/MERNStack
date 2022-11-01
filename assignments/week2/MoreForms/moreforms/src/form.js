import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { firstName, lastName, username, email, password, confirm}
        setFirstname("");
        setLastname("");
        setUsername("");
    	setEmail("");
    	setPassword("");
        setHasBeenSubmitted( true );
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
    
        if(e.target.value.length < 1) {
            setFirstNameError("First is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First Name must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
    
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last Name must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }
    const handleUsername = (e) => {
        setUsername(e.target.value);
    
        if(e.target.value.length < 1) {
            setUsernameError("Username is required!");
        } else if(e.target.value.length < 3) {
            setUsernameError("Username must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setUsernameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("Password must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
    
        if(e.target.value.length < 1) {
            setConfirmError("Confirm Password is required!");
        } else if(e.target.value.length < 3) {
            setConfirmError("Confirm Password must be 3 characters or longer!");
        } else if(confirmError !== passwordError) {
            setConfirmError("Passwords must match.")
        } else {
            // an empty string is considered a "falsy" value
            setConfirmError("");
        }
    }

    return(
        <div>
            <form onSubmit={(e) => e.preventDefault() }>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div>
                        <label>First Name: </label> 
                        <input type="text"onChange={ handleFirstname} />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                        <label>Last Name: </label> 
                        <input type="text"onChange={ handleLastname} />
                    {
                        lastNameError ?
                        <p>{lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                        <label>Username: </label> 
                        <input type="text"onChange={ handleUsername} />
                    {
                        usernameError ?
                        <p>{usernameError }</p> :
                        ''
                    }
                </div>
                <div>
                        <label>Email Address: </label> 
                        <input type="text"onChange={ handleEmail} />
                    {
                        emailError ?
                        <p>{emailError }</p> :
                        ''
                    }
                </div>
                <div>
                        <label>Password: </label>
                        <input type="text"onChange={ handlePassword} />
                    {
                        passwordError ?
                        <p>{passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                        <label>Confirm Password: </label>
                        <input type="text"onChange={ handleConfirm} />
                    {
                        confirmError ?
                        <p>{confirmError }</p> :
                        ''
                    }
                </div>
                <div>
                    <input type="submit" value="submit" disabled />
                    <input type="submit" value="submit" />
                </div>   
            </form>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
    );
};

    
export default UserForm;
