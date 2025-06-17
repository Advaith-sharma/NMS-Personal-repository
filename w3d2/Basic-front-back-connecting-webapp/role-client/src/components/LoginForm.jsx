import { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5234/api/auth/login', {
                username,
                password
            });

            const { token } = res.data;
            localStorage.setItem('token', token);
            setMessage('Login successful');
        } catch (err) {
            setMessage('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default LoginForm;
