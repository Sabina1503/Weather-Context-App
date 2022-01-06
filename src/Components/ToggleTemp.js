import React from "react";
import { MainContext, useContext } from "../context";
import { ToggleScale } from "../Store/weatherActions/Actions";
export default function ToggleTemp(props) {
  const { state, dispatch } = useContext(MainContext);
  const { scaleType } = state;
  return (
    <div>
      <button
        onClick={() => {
          dispatch(ToggleScale());
        }}
      >
        Change to {scaleType}
      </button>
    </div>
  );
}
