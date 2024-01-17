import React from "react";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import Setting from "./pages/Settings/Setting";
import NotFound from "./pages/NotFound/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/news" element={<News />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
