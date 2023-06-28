import React from 'react';

export default function OrderHistory() {
    

   async function handleCheckToken() {
      alert('clicked')

    }
    return (
      <main>
        <h1>Order History</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </main>
    );
  }