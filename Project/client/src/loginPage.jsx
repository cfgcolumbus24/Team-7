import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const endpoint = isNewUser ? `http://localhost:5001/api/users/register` : `http://localhost:5001/api/users/login`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    console.log(result);
    alert(result.message);

    if (response.ok && !isNewUser) {
      navigate('/app');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e4f4ff]">
      <h1 className="text-2xl font-bold mb-4">{isNewUser ? "Create Account" : "Login"}</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSubmit}
        className="rounded-lg border-2 border-transparent px-4 py-2 text-base font-semibold bg-[#adcaff] hover:border-[#508aff] transition-colors mb-4"
      >
        {isNewUser ? "Register" : "Login"}
      </button>
      <button
        onClick={() => setIsNewUser(!isNewUser)}
        className="text-sm text-blue-500 underline hover:text-blue-700"
      >
        {isNewUser ? "Already have an account? Log in" : "New to netCare access? Create account"}
      </button>
    </div>
  );
}

export default LoginPage;
