import React, { useState } from 'react';
import { Modal, Button } from 'antd';


const Question = (props) => {
    const [visibility, setVisibility] = useState(false);
    const { title } = props;

    
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
            <Button onClick={showModal}>{title}</Button>
            <Modal title={title} visible={visibility} onOk={handleOk} onCancel={handleCancel}>
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
            </Modal>
        </>
    )
}

export default Question;