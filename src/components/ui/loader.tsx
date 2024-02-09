import React from "react";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <Oval
      visible={true}
      height="15"
      width="15"
      color="#121212"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loader;
