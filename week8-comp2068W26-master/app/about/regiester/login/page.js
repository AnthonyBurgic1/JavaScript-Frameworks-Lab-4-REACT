export default function Login() {
  return (
    <div>
      <h1>Login to Your Account</h1>

      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>

        <button type="submit">Login</button>
        <p></p>
      </form>
    </div>
  );
}