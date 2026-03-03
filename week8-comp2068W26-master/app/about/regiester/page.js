export default function Register() {
  return (
    <div>
      <h1>Create an Account</h1>

      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
<p></p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}