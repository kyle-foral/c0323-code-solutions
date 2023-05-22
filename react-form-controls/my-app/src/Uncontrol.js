export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="username" name="username" />
      </label>

      <br></br>

      <label>
        Password
        <input type="password" name="password" />
      </label>

      <br></br>

      <button type="submit">Submit</button>
    </form>
  );
}
