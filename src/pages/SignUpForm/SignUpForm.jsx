import { Component } from 'react';
import { signUp } from '../../utilities/users-service';


// We need to export our class components just like function components
// One key diff betweek func and class comps is the extends keyword
// This tells the code to get all the good stuff from Component but let me make it work for my purposes

export default class SignUpForm extends Component {
    // Class components handle state differently than functions. Instead of hooks we use the class field called state
    state = {
          name: '',
          email: '',
          password: '',
          confirm: '',
          error: ''
    };
    // handleChange method -> handles user input in the form
    // looks at the name of the input field, and updates the value associated with that input field in state.

    handleChange = (evt) => {
    // we'll look at the event, gather info from the event, update state
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }

    // handleSubmit
    handleSubmit = async (evt) => {
        evt.preventDefault()
        // This was to make this function do something for testing our component
        // alert(JSON.stringify(this.state))
        try {
            // This is where we'll run out API Call
            // We'll start our api call process with a copy of the state data
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            // another way to handle this is destructuring
            // const { name, email, password } = this.state
            // const formData = { name, email, password }
            const user = await signUp(formData)
            this.props.setUser(user)
            console.log('This is the user in sign up form', user)

        }
        catch {
            // Handle our errors
            this.setState({error: 'Sign Up Failed - Try Again'})
        }
    };
    

    // every single class component needs a render method just like function components need return
    // render method tells our app what this component returns
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
            );

    }

}