import React from "react";
import TopNav from "./Components/TopNav";
import SideNav from "./Components/SideNav";
import { RestoreProvider } from "./context";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <RestoreProvider>
      <div className="App">
        <TopNav />
        <SideNav />
        <MainComponent />
      </div>
    </RestoreProvider>
  );
}

export default App;
