import React from "react";
import ReactDOM from "react-dom";
import GetDoc from "./Documents and Media/GetDoc";
import DocTable from "./Documents and Media/DocTable";
import Home from "./Home";

export default function main({
  portletNamespace,
  contextPath,
  portletElementId,
  configuration,
}) {
  ReactDOM.render(<Home/>, document.getElementById(portletElementId));
}
