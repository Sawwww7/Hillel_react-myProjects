import preloader from "./../../assets/images/preloader.svg";

import React from "react";

function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <img src={preloader} />
    </div>
  );
}

export default Loading;
