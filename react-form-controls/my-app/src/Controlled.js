import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username);
    console.log(password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>

      <br></br>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <br></br>

      <button type="submit">Submit</button>
    </form>
  );
}
