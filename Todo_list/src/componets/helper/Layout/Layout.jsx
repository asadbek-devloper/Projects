import { React } from "react";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <div>
      <Header logOut={props.logOut} />
      {props.children}
    </div>
  );
};

export default Layout;
