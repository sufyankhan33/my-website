import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@smartschool.edu',
    role: 'Super Admin',
    avatar: null,
  });

  const [schoolInfo, setSchoolInfo] = useState({
    name: 'SmartSchool Academy',
    registrationNo: 'REG-2024-890',
    address: '123 Education Ave, NY 10001',
    email: 'admin@smartschool.edu',
    phone: '+1 234 567 8900',
  });

  return (
    <UserContext.Provider value={{ user, setUser, schoolInfo, setSchoolInfo }}>
      {children}
    </UserContext.Provider>
  );
};
