import React, { createContext, useContext, useState } from "react";
const Infocontext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState("");
  const [age, setAge] = useState(0);
  const setingName = (value) => {
    setUser(value);
  };
  const setingAge = (value) => {
    setAge(value);
  };
  return (
    <Infocontext.Provider value={{ setingName, setingAge, user, age }}>
      {children}
    </Infocontext.Provider>
  );
}

export const useAuth = () => {
  return useContext(Infocontext);
};
