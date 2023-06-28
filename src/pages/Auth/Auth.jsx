import React from 'react';
import { useState } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LogInForm from '../../components/LoginForm/LoginForm';



export default function Auth({ setUser }) {
  const [userPref, setUserPref] = useState('signup')
  function handlePref() {
    if (userPref === 'signup') {
      setUserPref('login')
    } else {
      setUserPref('signup')
    }
  }
    return (
      <div>
        <h1>AuthPage</h1>
        { userPref === 'signup' ? <SignUpForm setUser={setUser} /> : <LogInForm setUser={setUser} />}
        <button onClick={handlePref}>
          { userPref === 'signup' ? 'Aleady a member? Log In' : 'Need an Account? Sign Up'}
          </button>
      </div>
    );
  }
  