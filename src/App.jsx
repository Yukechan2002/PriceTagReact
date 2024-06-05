import './App.css';
import React from 'react';
import Card from './components/Card';

const App = () => {
const user = [
  {
    id: 0,
    head: "Free",
    price: 0,
    users: "Single",
  },

  {
    id: 1,
    head: "Plus",
    price: 9,
    users: 5,
  },
  {
    id: 2,
    head: "Pro",
    price: 49,
    users: "Unlimited",
  }
];

  return (
    <div className="card-holder">
      <Card user={user[0]} />
      <Card user={user[1]} />
      <Card user={user[2]} />
    </div>
  );
}

export default App

