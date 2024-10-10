import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: 'John' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
