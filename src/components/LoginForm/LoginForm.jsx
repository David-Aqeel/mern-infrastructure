import { useState } from 'react';
import { login } from '../../utilities/users-service';

// we copied the SignUpForm.jsx but there are a few differences between classes and functions
// we import useState instead of Component

export default function LogInForm({ setUser}) {

    // state = {
    //       email: '',
    //       password: '',
    // };

    const [credentials, setCredentials] = useState({ email: '', password: ''})
    const [error, setError] = useState('')
    


    // handleChange method -> handles user input in the form
    // looks at the name of the input field, and updates the value associated with that input field in state.


    // functions must be declared in a function component because its no longer a method for a class
    function handleChange(evt) {
    // we'll look at the event, gather info from the event, update state
        // this.setState({
        //     [evt.target.name]: evt.target.value,
        //     error: ''
        // });
        setCredentials({...credentials, [evt.target.name]: evt.target.value})
        setError('')
    }

    // handleSubmit
    async function handleSubmit(evt) {
        evt.preventDefault();
        // This was to make this function do something for testing our component
        // alert(JSON.stringify(this.state))
        try {
            // // This is where we'll run out API Call
            // // We'll start our api call process with a copy of the state data
            // const formData = {...this.state}
            // delete formData.error
            // delete formData.confirm
            // // another way to handle this is destructuring
            // // const { name, email, password } = this.state
            // // const formData = { name, email, password }
            // const user = await signUp(formData)
            // this.props.setUser(user)
            const user = await login(credentials);
            setUser(user);
            console.log('credentials in login', credentials)

        } catch {
            // Handle our errors
            // this.setState({error: 'Sign Up Failed - Try Again'})
            setError({error: 'Sign Up Failed - Try Again'});
        }
    }
    

    // every single class component needs a render method just like function components need return
    // render method tells our app what this component returns

    return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </div>
    );

    

}