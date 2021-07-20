import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setquestion] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Question and Answer for login</h3>
        {questions.map((question) => {
        const {id,info,title} = question;
        return <SingleQuestion key={id} {...question}/> 
        })}
      </div>
  </main>
  )
}

export default App;
