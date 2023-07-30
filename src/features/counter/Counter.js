import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>counter</h1>
    </div>
  );
}
