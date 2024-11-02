import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (mockAuth(username, password)) {
      navigate('/app');
    } else {
      alert('Invalid credentials');
    }
  };

  const showDemoCredentials = () => {
    alert('Username: demoUser\nPassword: securePass123');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e4f4ff]">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
        onClick={handleLogin}
        className="rounded-lg border-2 border-transparent px-4 py-2 text-base font-semibold bg-[#adcaff] hover:border-[#508aff] transition-colors mb-4"
      >
        Login
      </button>
      <button
        onClick={showDemoCredentials}
        className="text-sm text-blue-500 underline hover:text-blue-700"
      >
        Click here for the username and password
      </button>
    </div>
  );
}

const mockAuth = (username, password) => {
  const validCredentials = {
    username: 'demoUser',
    password: 'securePass123'
  };
  return username === validCredentials.username && password === validCredentials.password;
};

export default LoginPage;
