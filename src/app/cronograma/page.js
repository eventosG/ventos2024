"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { AiOutlineCheck } from "react-icons/ai";
export default function Cronograma() {
  const [showVisao, setShowVisao] = useState(false);
  const [showResumo, setShowResumo] = useState(false);
  const [IsRSVP, setIsRSVP] = useState(false);
  const [momentoText, setMomentoText] = useState("");
  const [fundo, setFundo] = useState("text-green-500");
  function momento(momento) {
    setShowVisao(true);
    setMomentoText(momento);
  }
  useEffect(() => {
    const timerInterval = setInterval(() => {
      console.log("Countdown complete!");
    }, 5000);
  }, []);
  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="mt-4">
        <p className="text-center font-bold text-xl mb-4">Cronograma</p>
        <hr />
        <div className="gap-4 flex justify-center">
          <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-center">
                <Image
                  height={400}
                  width={900}
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  className="w-28 rounded-full shadow-lg"
                  alt="Avatar"
                />
                <Image
                  height={400}
                  width={900}
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  className="w-28 rounded-full shadow-lg"
                  alt="Avatar"
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Casamento de:</p>
                  <p>Marta Antonio e Mario Moises Cossa</p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Local do Evento:</p>
                  <p>Salao Juvenil</p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Data do Evento:</p>
                  <p>00/00/2000</p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Mestre de Ceremonia:</p>
                  <p>Valdemar Valdemar</p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Duração:</p>
                  <p>12:00 h as 15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                        #
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Momento
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Descrição
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Interveniente
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Duração
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Acção
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {" "}
                        <div className="flex justify-center">
                          <Countdown date={Date.now() + 5000}>
                            <AiOutlineCheck className="text-blue-600" />
                          </Countdown>
                        </div>
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4 cursor-pointer">
                        ...
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                      <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap  px-6 py-4">@fat</td>
                      <td className="whitespace-nowrap  px-6 py-4">00</td>
                      <td className="whitespace-nowrap  px-6 py-4 cursor-pointer">
                        ...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            height={400}
            width={900}
            src="/qrCode.png"
            className="w-28"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

// O formulário de registro deverá pedir o numero de convidados expeciais e outros convidados separadamente, estes dados serão usados no RSVP das tabelas dos convidados especiais e outros convidados respectivamente
