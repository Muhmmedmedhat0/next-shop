import React from "react";

import Navbar from "./navbar";
import { AppProps } from "../../Types/app-props.types";
import Annoucement from "../home/annoucement";

function Layout(props: AppProps) {
  return (
    <>
      <Annoucement />
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
