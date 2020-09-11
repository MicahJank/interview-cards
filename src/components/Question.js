import React, { useState } from 'react';
import { Modal, Button, Divider } from 'antd';

import styled from 'styled-components';


const Card = styled.div`
border: 1px solid black;
width: 200px;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

&:hover {
  cursor: pointer;
}
`;

const Question = (props) => {
    const [visibility, setVisibility] = useState(false);
    const { title, goals, setting, action, result } = props;

    
  const showModal = (e) => {
    setVisibility(true)
  }

  const handleOk = () => {
    setVisibility(false)
  }

  const handleCancel = e => {
    setVisibility(false)
  }


    return (
        <>
            <Card className="question" onClick={showModal}>{title}</Card>
            <Modal width={1000} style={{ top: 20 }} title={title} visible={visibility} onOk={handleOk} onCancel={handleCancel}>
                <h3>Goal of this question</h3>
                {goals.map(line => <h4>- {line}</h4>)}
                <Divider />
                <h3>Remember STAR method</h3>
                <Divider />
                <h3>The Setting or Task</h3>
                {setting.map(line => <h4>- {line}</h4>)}
                <Divider />
                <h3>The Action I took</h3>
                {action.map(line => <h4>- {line}</h4>)}
                <Divider />
                <h3>The Result of my Action</h3>
                {result.map(line => <h4>- {line}</h4>)}
            </Modal>
        </>
    )
}

export default Question;