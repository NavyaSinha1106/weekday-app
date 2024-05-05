import React from "react";
import TopNav from "./Components/TopNav";
import SideNav from "./Components/SideNav";
import { ContextProvider } from "./context";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <TopNav />
        <SideNav />
        <MainComponent />
      </div>
    </ContextProvider>
  );
}

export default App;
