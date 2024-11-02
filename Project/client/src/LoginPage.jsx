import { useState } from 'react';

function LoginPage({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (mockAuth(username, password)) {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const showDemoCredentials = () => {
    alert('Username: admin\nPassword: admin');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      {/* Login Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-4">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Welcome to AskDB</h1>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        <button
          onClick={showDemoCredentials}
          className="mt-4 text-blue-500 underline hover:text-blue-700 text-center block"
        >
          Click here for the username and password
        </button>
      </div>

      {/* Footer with Mission Statement */}
      <footer className="mt-8 text-center text-blue-900 text-sm">
        <p>Our mission is to support those in need of behavioral healthcare and emotional support.</p>
        <p>Visit <a href="https://netcareaccess.org" className="underline text-blue-800 hover:text-blue-900">netcareaccess.org</a> to learn more.</p>
      </footer>
    </div>
  );
}

const mockAuth = (username, password) => {
  const validCredentials = {
    username: 'admin',
    password: 'admin'
  };
  return username === validCredentials.username && password === validCredentials.password;
};

export default LoginPage;
