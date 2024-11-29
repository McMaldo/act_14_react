import React, { useState } from 'react';
import ENDPOINT from '../../env.js';

export default function RegisterForm({ onRegisterSuccess }) {
  const [email, setEmail] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInput = ({ target }) => {
    switch (target.id) {
      case 'email':
        setEmail(target.value);
        break;
      case 'nick':
        setNick(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      case 'passwordRepeat':
        setPasswordRepeat(target.value);
        break;
      default:
        break;
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(ENDPOINT.POST_USER_REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nick, password, passwordRepeat }),
      });

      if (response.ok) {
        onRegisterSuccess();
      } else {
        const data = await response.json();
        setError(data.message || 'Error en el registro');
      }
    } catch (error) {
      setError('Ocurrió un error. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
			setError("register succesfull")
    }
  };

  const validateForm = () => {
    if (!email || !nick || !password || !passwordRepeat) {
      setError('Todos los campos son obligatorios');
      return false;
    }
    if (password !== passwordRepeat) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleRegister}>
      <span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={handleInput}
          required
        />
      </span>
      <span>
        <input
          type="text"
          name="nick"
          id="nick"
          placeholder='Nick Name'
          maxLength="20"
          value={nick}
          onChange={handleInput}
          required
        />
      </span>
      <span>
        <input
          type="password"
          name="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={handleInput}
          required
        />
      </span>
      <span>
        <input
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder='Repeat Password'
          value={passwordRepeat}
          onChange={handleInput}
          required
        />
      </span>
      <input 
        type="submit" 
        value="Register" 
        id="RegisterBtn" 
        disabled={loading} 
      />
      {loading && <img src="/act_14_react/img/loading.svg" alt="Loading..." className='loading' />}
      {error && <p>{error}</p>}
    </form>
  );
}
