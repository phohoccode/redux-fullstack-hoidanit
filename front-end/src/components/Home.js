import React from "react";
import Header from "./Header";
import FormAddNew from "./FormAddNew";
import TableUser from "./TableUser";

function Home() {
  return (
    <div className="container">
      <Header />
      <FormAddNew />
      <hr/>
      <TableUser />
    </div>
  );
}

export default Home;
