import { createContext, useContext, useState, useMemo } from "react";
const initialStateUser = {
  id: {
    name: "",
    value: "",
  },
  name: "",
  email: "",
  picture: "",
  gender: "",
  location: {
    city: "",
    state: "",
    country: "",
  },
  dob: {
    date: "",
    age: 0,
  },
};

const AppContext = createContext({
  theme: "",
  selectedUser: initialStateUser,
  setSelectedUser: () => {},
  setTheme: () => {},
});

export function ContexWrapper({ children }) {
  const [theme, setTheme] = useState("light");
  const [selectedUser, setSelectedUser] = useState(initialStateUser);

  const valueContex = useMemo(
    () => ({ selectedUser, setSelectedUser, theme, setTheme }),
    [selectedUser, theme]
  );
  return (
    <AppContext.Provider value={valueContex}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
