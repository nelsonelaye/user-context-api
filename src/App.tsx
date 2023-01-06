import React, { createContext, useState } from "react";
import LandingPage from "./routes/LandingPage";
import { props as AppProps } from "./App.types";

export const AppContext = createContext([]);

function App() {
  const [users, setUsers] = useState([
    // { name: "nelson", age: 20, bio: "what's is to ya" },
  ]);

  return (
    <AppContext.Provider value={users}>
      <LandingPage />
    </AppContext.Provider>
  );
}

export default App;
