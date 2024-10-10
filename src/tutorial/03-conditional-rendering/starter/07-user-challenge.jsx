import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name: 'John', age: 25});
  }

  const logout = () => {
    setUser(null)
  }

  return <h2>user challenge</h2>;
};

export default UserChallenge;
