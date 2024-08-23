"use client";
import React, { useState, useEffect, useRef } from "react";
const listServicos = [
  {"servico": "Transporte","preco":"3.000.00"},
  {"servico": "Garçom e Protocolo","preco":"3.000.00"},
  {"servico": "Fotografia e Vídeo","preco":"3.000.00"},
  {"servico": "Catering e Rodízio","preco":"3.000.00"},
  {"servico": "Doces e Salgados","preco":"3.000.00"},
  {"servico": "Sobremesas","preco":"3.000.00"},
  {"servico": "Telas e Projectores","preco":"3.000.00"},
]
export default function Servicos() {
  const [isSelected, setIsSelected] = useState("Todos Produtos");
  const [video, setVideo] = useState(false);
  const [mic, setMic] = useState(false);
  const [hand, setHand] = useState(false);

  useEffect(() => {   
  }, []);


  return (
    <div className='container lg:mx-auto lg:min-h-50vh'>
      <div className='grid grid-cols-1 lg:grid-cols-6'>
      <div className='flex flex-col'>       
        <div className='h-screen block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
        <p className="font-bold text-center mb-1">Momentos</p>
        <hr />
        <div className="mt-2">
            <video width="100%" height="100%" controls id="player">
                <source src="/assets/videos/evento.mp4" type="video/mp4"/>
            </video>
            <p>Momento 1</p>
        </div>
        <div className="mt-2">
            <video width="100%" height="100%" controls id="player">
                <source src="/assets/videos/evento.mp4" type="video/mp4"/>
            </video>
            <p>Momento 2</p>
        </div>
        <div className="mt-2">
            <video width="100%" height="100%" controls id="player">
                <source src="/assets/videos/evento.mp4" type="video/mp4"/>
            </video>
            <p>Momento 3</p>
        </div>
        </div>
      </div>
      <div className='block col-span-5 w-full'>
        <div className='mx-4'>
                <div className="text-center font-bold text-xl mb-4 mt-12">
                    <p>Nome da Cena Celacionada</p>
                </div>
                <div>
                {isSelected === "Transporte" && (
                    <>
                    <div className="flex flex-row gap-4">
                    <div>
                        <h3 className="font-bold cursor-pointer">Noivos</h3>
                    </div>                
                    </div>
                    <hr />
                    </>
                )}
                </div>
                <div className="mt-4">
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="mt-2 flex flex-row gap-4">
                        {mic ? (
                        <>
                        <div onClick={() => setMic(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        </>
                        ):(
                        <>
                        <div onClick={() => setMic(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        </>
                        )}
                        {video ? (
                      <>
                        <div onClick={() => setVideo(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </div>
                      </>
                      ):(
                      <>
                        <div onClick={() => setVideo(true)}>                     
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                          </svg>
                        </div>
                      </>
                      )
                      }
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                      </div>
                      {hand ? (
                      <>
                        <div onClick={() => setHand(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                          </svg>                          
                        </div>
                      </>
                      ):(
                      <>
                        <div onClick={() => setHand(true)} className="flex flex-row">                     
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                          </svg>   
                          <p className='text-xs'>Mão Levantada</p>                       
                        </div>
                      </>
                      )
                      }
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-bold">Cenas</p>
                </div>
                <hr />
                <div className='grid grid-cols-6 mt-2 gap-2 mb-4'>
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>                    
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>                    
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>                    
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>                    
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>                    
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>                    
                    <div>
                        <video width="100%" height="100%" controls id="player">
                            <source src="/assets/videos/evento.mp4" type="video/mp4"/>
                        </video>
                    </div>                    
                </div>
                </div>
                <div>          
            </div>          
        </div>
      </div>      
    </div>
    
  );
}