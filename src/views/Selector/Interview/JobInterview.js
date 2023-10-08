import React, { useState, useEffect, useRef } from 'react';
import { Button, List } from 'antd';
import { SendOutlined,SlackSquareOutlined, UserOutlined} from '@ant-design/icons';
import styles from './JobInterview.module.css';
import JobInterviewInput from '../../../components/AntdStyleComponent/JobInterviewInput'
import JobInterviewList from '../../../components/AntdStyleComponent/JobInterviewList'

const userListItem ={
    justifyContent: 'flex-end'
}
const botListItem ={
    justifyContent: 'flex-start'
}


function JobInterview() {
    const [messages, setMessages] = useState([{ text: "how can i help you?", sender: 'bot' }]);
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
            setMessages(messages=>[...messages, { text: "how can i help you?", sender: 'bot' }]);
        }, 1000);
    };

    return (
      <div className={styles.containerStyle}>
        <div className={styles.titleStyle}>
          <div>Start your Interview!</div>
          <div>Choose your dream career and start interview!</div>
        </div>
        <div className={styles.formStyle}>
            <JobInterviewList
                dataSource={messages}
                renderItem={message => (
                    <List.Item style={message.sender === 'user'?userListItem:botListItem}>
                        {message.sender === 'bot' && <SlackSquareOutlined className={styles.iconStyle} />}
                        <div 
                        className={message.sender === 'user'?styles.userMsg : styles.botMsg}>
                            {message.text}
                        </div>
                        {message.sender === 'user' && <UserOutlined className={styles.iconStyle} />}
                    </List.Item>
                )}
            />
            <div ref={messagesEndRef}></div>
        </div>
        <div className={styles.formStyle}>
        <JobInterviewInput
                size='large'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Send a message"
                onPressEnter={handleSubmit}
                addonAfter={
                    <Button style={{background:'black'}} type="primary" icon={<SendOutlined />} onClick={handleSubmit}></Button>
                }
            />
        </div>
        </div>
    );
}

export default JobInterview;
