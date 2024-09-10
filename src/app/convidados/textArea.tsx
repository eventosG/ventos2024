"use client";
import React from "react";
import dynamic from "next/dynamic";
const TETextarea = dynamic(() =>
  import("tw-elements-react").then((res) => res.TETextarea)
);

export default function TextArea() {
  return (
    <>
      <TETextarea id="textareaExample" label="Mensagem" rows={4}></TETextarea>
    </>
  );
}
