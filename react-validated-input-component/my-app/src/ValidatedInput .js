import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleChange(event) {
    setPassword(event.target.value);
  }

  let message = '';
  let icon = '';
  if (password.length === 0) {
    message = 'password is required';
    icon = '❌';
  } else if (password.length > 0 && password.length < 8) {
    message = 'password is to short';
    icon = '❌';
  } else {
    message = '';
    icon = '✅';
  }

  return (
    <div>
      <label>
        Password:
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <i> {icon} </i>
      </label>
      <p> {message} </p>
    </div>
  );
}

//(event) => setPassword(event.target.value);
