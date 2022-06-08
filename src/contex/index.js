import { createContext, useContext, useState, useMemo, useEffect } from "react";
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

const initialStateTheme = {
  selected: "white",
  list: ["white", "turquoise", "hotpink"],
};

const AppContext = createContext({
  theme: initialStateTheme,
  selectedUser: initialStateUser,
  setSelectedUser: () => {},
  setTheme: () => {},
});

export function ContexWrapper({ children }) {
  const [theme, setTheme] = useState(initialStateTheme);
  const [selectedUser, setSelectedUser] = useState(initialStateUser);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(JSON.parse(theme));
    }
  }, []);

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
