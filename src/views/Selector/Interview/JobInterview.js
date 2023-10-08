import React, { useState, useEffect, useRef } from 'react';
import { Input, Button, List } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './JobInterview.css'

function JobInterview() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages([...messages, { text: inputValue, sender: 'user' }]);
        setInputValue('');

        // For demo purpose, we just echo back the message
        // Replace with actual API call to your chatbot backend
        setTimeout(() => {
            setMessages([...messages, { text: inputValue, sender: 'bot' }]);
        }, 1000);
    };

    return (
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <div>
          <div style={{fontSize:'30px', fontWeight:'bold',textAlign:"center"}}>
          Start your Interview!
          </div>
          <div style={{fontSize:'20px',textAlign:"center"}}>
          Choose your dream career and start interview!
          </div>
          
        </div>
        <div style={{ width: 600 }}>
            <List
                dataSource={messages}
                renderItem={message => (
                    <List.Item style={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <div style={{
                            padding: '8px 12px',
                            borderRadius: '12px',
                            background: message.sender === 'user' ? '#e9e9e9' : '#d9d9d9'
                        }}>
                            {message.text}
                        </div>
                    </List.Item>
                )}
                style={{ maxHeight: 600, overflowY: 'auto', marginBottom: 16 }}
            />
            <div ref={messagesEndRef}></div>
            <Input
                className="custom-input"
                size='large'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Send a message"
                onPressEnter={handleSubmit}
                style={{fontSize:'20px'}}
                addonAfter={
                    <Button style={{background:'black'}} type="primary" icon={<SendOutlined />} onClick={handleSubmit}></Button>
                }
            />
        </div>
        </div>
    );
}

export default JobInterview;
