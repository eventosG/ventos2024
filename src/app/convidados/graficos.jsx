"use client";
import React from "react";
import dynamic from "next/dynamic";
import { parse } from "path";
const TEChart = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEChart)
);

export default function Graficos({
  convidadosConfirmados,
  convidadosPendentes,
  convidadosCancelados,
  convidadosRecusados,
}) {
  const cancelados = parseInt(convidadosCancelados);
  const confirmados = parseInt(convidadosConfirmados);
  const pendentes = parseInt(convidadosPendentes);
  const recusados = parseInt(convidadosRecusados);
  return (
    <>
      <TEChart
        type="doughnut"
        data={{
          labels: ["Confirmados", "Pendentes", "Cancelado", "Recusado"],
          datasets: [
            {
              label: "Traffic",
              data: [confirmados, pendentes, cancelados, recusados],
              backgroundColor: [
                "rgba(63, 81, 181, 0.5)",
                "rgba(77, 182, 172, 0.5)",
                "rgba(66, 133, 244, 0.5)",
                "rgba(233, 30, 99, 0.5)",
              ],
            },
          ],
        }}
      />
    </>
  );
}
