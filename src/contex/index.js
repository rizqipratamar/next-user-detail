import { createContext, useContext, useState, useMemo } from "react";
const initialStateUser = {
  name: {
    first: "",
    last: "",
  },
  email: "",
  picture: "",
  gender: "",
  dob: {
    date: "",
  },
  description: "",
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
