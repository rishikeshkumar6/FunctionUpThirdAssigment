
import React from 'react';
import { CardProfile } from './CardProfile/CardProfile';
import rishu from './rishu.jpeg'
import harsh from './harsh.jpeg'
import shivam from './shivam.jpeg'

function App() {
  return (
    <div>
      <CardProfile source={rishu} name="Rishikesh kumar singh" designation="UI/UX Designer" jobDescription="hello my name is Rishikesh kumar singh and i am UI/UX designer" />
      <CardProfile source={harsh} name="Harsh kumar" designation="Backend Devloper" jobDescription="hello my name is Harsh kumar and i am Backend Developer" />
      <CardProfile source={shivam} name="Shivam kumar" designation="Full stack Developer" jobDescription="hello my name is Shivam kumar and i am Full stack developer" />
    </div>
  );
}

export default App;







