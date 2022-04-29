import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, User, NotFound } from "./pages";

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route
          path="user"
          element={
            <User
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
