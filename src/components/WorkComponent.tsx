import React from "react";
import { DefaultHeadScreen, FullScreen } from "../styles/Screens";

function WorkComponent() {
  return (
    <FullScreen
      custom={{
        backgroubdColor: "#FFF",
        isNotDefault: true,
      }}
    >
      <DefaultHeadScreen
        custom={{
          color: "#333",
          textAlign: "center",
        }}
      >
        <h1>WORK</h1>
      </DefaultHeadScreen>
    </FullScreen>
  );
}

export default WorkComponent;
