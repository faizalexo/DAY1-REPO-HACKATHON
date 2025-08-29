import React from 'react';
import ProfileCard from './Profilecard';
import './App.css'; 

function App() {
  const faizalData = {
    name: "faizal",
    status: "Student",
    email: "fazelk504@gmail.com",
    phone: "78799*****",
    linkedin: "www.linkedin.com/in/faizel-khan-119951333"
  };

  return (
    <div className="App">
      <h1>My React Profile Cards</h1>
      <ProfileCard
        name={faizalData.name}
        status={faizalData.status}
        email={faizalData.email}
        phone={faizalData.phone}
        linkedin={faizalData.linkedin}
      />
    </div>
  );
}

export default App;
