"use client";
import React from "react";
import dynamic from "next/dynamic";
const TEChart = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEChart)
);

export default function GraficosParticipacao() {
  return (
    <>
      <TEChart
        type="doughnut"
        data={{
          labels: ["Presencial", "Virtual"],
          datasets: [
            {
              label: "Traffic",
              data: [2112, 2343],
              backgroundColor: [
                "rgba(63, 81, 181, 0.5)",
                "rgba(77, 182, 172, 0.5)",
              ],
            },
          ],
        }}
      />
    </>
  );
}
