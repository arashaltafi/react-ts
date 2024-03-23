import { useState, useEffect } from 'react';

const WebSocketClient = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:8080');

        newSocket.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        newSocket.onmessage = async  (event) => {
            const message = await event.data.text(); // Convert Blob to text
            setMessages(prevMessages => [...prevMessages, message]);
        };

        newSocket.onclose = () => {
            console.log('Connection to WebSocket server closed');
        };

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    const sendMessage = () => {
        if (inputMessage.trim() !== '') {
            if (socket) {
                socket.send(inputMessage);
            }
            setInputMessage('');
        }
    }

    return (
        <div>
            <h1>WebSocket Example</h1>
            <div>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
        </div>
    )
}

export default WebSocketClient