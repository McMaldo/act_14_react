import React, { useState } from 'react';
import loadingImg from '/act_14_react/img/loading.svg';
import ENDPOINT from '../../env.js';

export default function LoginForm({ onLoginSuccess }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleInput = ({ target }) => {
		if (target.id === 'username') {
			setUsername(target.value);
		} else {
			setPassword(target.value);
		}
	};
	
	const handleLogin = async (event) => {
		//event.preventDefault();
		setLoading(true);
		setError('');
		try {
			const response = await fetch(ENDPOINT.POST_USER_LOGIN, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username,
					password,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				localStorage.setItem('token', data.token);
				onLoginSuccess();
			} else {
				setError(data.message || 'Invalid login credentials');
			}
		} catch (error) {
			setError('An error occurred. Please try again.');
		} finally {
			setLoading(false);
		}
	};
	
	const validateForm = () => { 
		if (!username || !password) { 
			setError('Both fields are required'); 
			return false; 
		}
		handleLogin();
		return true; 
	};

	return (
		<form onSubmit={handleLogin}>
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
				onClick={validateForm}
			/>
			{loading && <img src={loadingImg} alt="Loading..." className='loading' />}
			{error && <p>{error}</p>}
		</form>
	);
}
