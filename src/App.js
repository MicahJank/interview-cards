import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

import { data } from './interview_data.js';

import Question from './components/Question.js';

function App() {

  return (
    <div className="App">
      {data.map(question => {
        return <Question title={question.title} goals={question.goals} setting={question.setting_task} action={question.action} result={question.result} />
      })}
    </div>
  );
}

export default App;
