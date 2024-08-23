export default function Facturacao() {
    return (
      <>    
        <div className="container lg:mx-auto lg:min-h-50vh h-screen">
            <div className="mt-4 flex justify-end">
                <button
                type="button"
                className="ml-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Gerar PDF
                </button>
            </div>
            <hr className="my-2" />
            <div className="my-4 bg-blue-100">
                <div className="flex justify-between p-4">
                    <div>
                        <p className="font-bold">Nome da Empresa</p>
                        <p>Endereço da Empresa</p>
                        <p>NUIT: 00000000</p>
                        <p>Email: emaildaEmpresa@gmail.com</p>
                        <p>Contactos: 845445474 | 44544611</p>
                    </div>
                    <div>
                        <p className="flex justify-end font-bold">Nome da Empresa</p>
                        <p className="flex justify-end">Endereço da Empresa</p>
                        <p className="flex justify-end">NUIT: 00000000</p>
                        <p className="flex justify-end">Email: emaildaEmpresa@gmail.com</p>
                        <p className="flex justify-end">Contactos: 845445474 | 44544611</p>
                    </div>
                </div>
                <div className="text-center font-bold text-4xl">
                    <p>Cotação</p>
                </div>
                <div class="grid grid-cols-3 gap-4 p-4">
                    <div className="font-bold">Itens: 1</div>
                    <div className="text-center font-bold">Moeda: MZN</div>
                    <div className="flex justify-end flex-col">
                        <p className="flex justify-end font-bold">Número da Cotação: 00001</p>
                    </div>
                </div> 
                <div className="flex flex-col mb-4 p-4">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                            <thead
                                className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                <tr>
                                <th scope="col" className=" px-6 py-4 flex justify-start w-12">#</th>
                                <th scope="col" className=" px-6 py-4 w-96">Descrição</th>
                                <th scope="col" className=" px-6 py-4">Código</th>
                                <th scope="col" className=" px-6 py-4">Quantidade</th>
                                <th scope="col" className=" px-6 py-4">Preço</th>
                                <th scope="col" className=" px-6 py-4">IVA</th>
                                <th scope="col" className=" px-6 py-4 flex justify-end">Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap  px-6 py-4 font-medium flex justify-start w-12">1</td>
                                <td className="whitespace-nowrap  px-6 py-4  w-96">Descrição do Produto 1</td>
                                <td className="whitespace-nowrap  px-6 py-4">0001</td>
                                <td className="whitespace-nowrap  px-6 py-4">0</td>
                                <td className="whitespace-nowrap  px-6 py-4">0.00</td>
                                <td className="whitespace-nowrap  px-6 py-4 cursor-pointer">0%</td>
                                <td className="whitespace-nowrap  px-6 py-4 cursor-pointer flex justify-end">0.00</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap  px-6 py-4 font-medium flex justify-start w-12">2</td>
                                <td className="whitespace-nowrap  px-6 py-4 w-96">Descrição do Produto 2</td>
                                <td className="whitespace-nowrap  px-6 py-4">0002</td>
                                <td className="whitespace-nowrap  px-6 py-4">0</td>
                                <td className="whitespace-nowrap  px-6 py-4">0.00</td>
                                <td className="whitespace-nowrap  px-6 py-4 cursor-pointer">0%</td>
                                <td className="whitespace-nowrap  px-6 py-4 cursor-pointer flex justify-end">0.00</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div>
                        <p className="font-bold flex justify-end px-4">Soma dos Impostos</p>
                        <div className="flex flex-col mb-4 px-4">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light">
                                    <thead
                                        className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                        <tr>
                                        <th scope="col" className=" px-6 py-4 flex justify-start w-12">Subtotal</th>
                                        <th scope="col" className=" px-6 py-4 w-96">Saldos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium flex justify-start w-12">Subtotal Sem IVA</td>
                                        <td className="whitespace-nowrap  px-6 py-4 w-96">0.00</td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium flex justify-start w-12">Total IVA</td>
                                        <td className="whitespace-nowrap  px-6 py-4 w-96">0.00</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                        <p className="font-bold flex justify-end px-4 text-2xl my-8">Total: 0.00</p>
                    </div>
                </div>
            </div>
            
                    
        </div>  
      </>
    );
  }
  