import Countdown from './countdown';
import Image from "next/image";
import { Progress } from "@nextui-org/react";
import './aqui.css';
export default function UserProfile() {
    
    return (
      <>    
        <div className="container lg:mx-auto lg:min-h-50vh">
            <div className='justify-center items-center bg-[url("/assets/images/wedding-1183271_1920.jpg")] bg-conver mt-4'>
                <div className="gap-4 flex justify-center">
                        <div className='block rounded-lg my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full'>
                            <div className="flex flex-col justify-center text-white">                            
                                <div className="flex flex-row justify-center">
                                    <Image
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                    className="w-28 rounded-full shadow-lg"
                                    alt="Avatar" />
                                    <Image
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                    className="w-28 rounded-full shadow-lg"
                                    alt="Avatar" />
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
                                    <div className="flex flex-col justify-center mt-4 font-bold text-center">
                                        <p className='mb-4'>Contagem Regressiva</p>
                                        <Countdown data={"12-11-2024"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='grid grid-cols-3 gap-4 justify-center w-full mt-4'>
                    <div className='shadow-md text-center bg-blue-100 flex justify-center rounded-lg'>
                        <div className='p-4'>
                            <p className='font-bold'>Tarefas Realizadas</p>
                            <p className='mb-2'>11/12</p>
                            <Progress size="sm" value={94} color="warning" />
                        </div>
                    </div>
                    <div className='shadow-md text-center bg-blue-100 flex justify-center rounded-lg'>
                        <div className='p-4'>
                            <p className='font-bold'>Orçamento Executado</p>
                            <p className='mb-2'>3.000,00 / 100.000,00</p>
                            <Progress size="sm" value={50} color="warning" />
                        </div>                    
                    </div>
                    <div className='shadow-md text-center bg-blue-100 flex justify-center rounded-lg'>
                        <div className='p-4'>
                            <p className='font-bold'>Convidados Confirmados (RSVP)</p>
                            <p className='mb-2'>08/15</p>
                            <Progress size="sm" value={80} color="warning" />
                        </div>                    
                    </div>
            </div>
            <div className="flex flex-row text-2sm text-center justify-end mt-2">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    // onClick={() => setShowModal2(false)}
                    >
                    Gerar Relatório Final
                    </button>
            </div>
            <div className='mt-4 text-center'>
                <p>TIME LINE</p>
            </div>
            <div className='flex justify-center'>
                <div className="timeline">
                    <div className="outer">
                        <div className="card">
                        <div className="info">
                            <h3 className="title">Título 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="info">
                            <h3 className="title">Título 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="info">
                            <h3 className="title">Título 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="info">
                            <h3 className="title">Título 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="info">
                            <h3 className="title">Título 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
      </>
    );
  }