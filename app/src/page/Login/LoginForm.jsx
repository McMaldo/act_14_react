import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate en lugar de useHistory
import ENDPOINT from '../../env.js';

export default function LoginForm({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Inicializa useNavigate para redirigir

    const handleInput = ({ target }) => {
        if (target.id === 'username') {
            setUsername(target.value);
        } else {
            setPassword(target.value);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${ENDPOINT.POST_USER_LOGIN}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            console.log('Response Data:', data); // Verifica qué datos se reciben

            if (response.ok) {
                // Almacenar los datos del usuario en localStorage
                localStorage.setItem('user', JSON.stringify(data.user));

                // Redirigir a la página de Landing usando navigate()
                navigate('/act_14_react/Menu');  // Redirige a '/landing'

                // Llamar a la función de éxito del login
                onLoginSuccess();
            } else {
                setError(data.message || 'Invalid login credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const validateForm = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError('Both fields are required');
            return false;
        }
        handleLogin(event);
        return true;
    };

    return (
        <form onSubmit={validateForm}>
            <span>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder='Insert Email or Nick'
                    value={username}
                    onChange={handleInput}
                    required
                />
            </span>
            <span>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='Insert Password'
                    value={password}
                    onChange={handleInput}
                    required
                />
            </span>
            <input
                type="submit"
                value="Login"
                id="LoginBtn"
                disabled={loading}
            />
            {loading && <img src="/act_14_react/img/loading.svg" alt="Loading..." className='loading' />}
            {error && <p>{error}</p>}
        </form>
    );
}
