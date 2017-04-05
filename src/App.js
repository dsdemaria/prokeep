import React, { Component } from 'react'
import CustomerInfo from './CustomerInfo'
import customers from './customers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ul className='App-list'>
          {customers.map(customer => <CustomerInfo
            key={customer.id}
            name={`${customer.firstName} ${customer.lastName}`}
            companyName={customer.companyName}
          />)}
        </ul>
      </div>
    );
  }
}

export default App;
