"use client";
import React from "react";
import dynamic from "next/dynamic";
const TEInput = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEInput)
);

export default function Input() {
  return (
    <>
      <TEInput
        type="number"
        id="exampleFormControlInput1"
        label="Minimo"
      ></TEInput>
      <TEInput
        type="number"
        id="exampleFormControlInput1"
        label="Máximo"
      ></TEInput>
    </>
  );
}
