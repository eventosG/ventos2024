"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const headerList = [
  {
    name: "Planificação",
    link: "/planificacao",
  },
  {
    name: "Serviços",
    link: "/servicos",
  },
  {
    name: "Convidados",
    link: "/convidados",
  },
  {
    name: "Convites",
    link: "/convites",
  },
  {
    name: "Streaming",
    link: "/streaming",
  },
  {
    name: "Cronograma",
    link: "/cronograma",
  },
  {
    name: "Facturação",
    link: "/facturacao",
  },
  {
    name: "Inspiração",
    link: "/inspiracao",
  },
  {
    name: "Dicas",
    link: "/dicas",
  },
];
const headerList2 = [
  {
    name: "Início",
    link: "/",
  },
  {
    name: "Serviços",
    link: "/",
  },
  {
    name: "Sobre Nós",
    link: "/",
  },
  {
    name: "Contactos",
    link: "/",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <Image
            height={100}
            width={100}
            src="/logoDD.png"
            className="w-8 rounded-full"
            alt="Avatar"
          />
        </a>

        {/* Menu Desktop */}
        <SignedOut>
          <div className="hidden md:flex space-x-6 list-none">
            {headerList2.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="text-white hover:text-blue-200 hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </div>
        </SignedOut>
        <SignedIn>
          <div className="hidden md:flex space-x-6 list-none">
            {headerList.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="text-white hover:text-blue-200 hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </div>
          {/* {toggleDropdown ? (
            <></>
          ) : (
            <>
              <Image
                alt="Profilo Pic"
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="flex rounded-full"
                width={37}
                height={37}
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
            </>
          )} */}
        </SignedIn>

        <div className="hidden md:flex justify-end">
          <div className="absolute z-20 top-0 right-16 bg-sky-500 mt-2 rounded-lg text-white">
            {toggleDropdown && (
              <div className="dropdownDesktop">
                <Link
                  href={"/userProfile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  <div className="flex flex-col text-center justify-center content-center p-4 mb-2 items-center bg-sky-600 rounded-lg">
                    <h3>emailusuario@gmail.com</h3>
                    <Image
                      alt="Profilo Pic"
                      src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                      className="flex mt-4 rounded-full"
                      width={60}
                      height={60}
                      onClick={() => setToggleDropdown((prev) => !prev)}
                    />
                    <h1>
                      Olá, <small className="uppercase">Nome do Usuário</small>{" "}
                    </h1>
                  </div>
                </Link>
                <hr className="my-4" />
                <div className="p-2">
                  <Link
                    href={"/meusEventosLista"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                      Meus Eventos
                    </div>
                  </Link>
                  <Link
                    href={"/definicoes"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Definições
                    </div>
                  </Link>
                  <Link
                    href={"#"}
                    className="dropdown_link"
                    // onClick={() => meusEventos()}
                  >
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                        />
                      </svg>
                      Tema
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                    }}
                    className="mt-5 w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    Terminar Sessão
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <>
          <div className="md:hidden flex justify-end mx-4">
            {toggleDropdown ? (
              <></>
            ) : (
              <>
                <Image
                  alt="Profilo Pic"
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                  className="flex rounded-full"
                  width={37}
                  height={37}
                  onClick={() => setToggleDropdown((prev) => !prev)}
                />
              </>
            )}
            <div className="absolute z-20 top-0 right-16 bg-sky-500 mt-2 rounded-lg text-white">
              {toggleDropdown && (
                <div className="dropdownDesktop">
                  <Link
                    href={"/userProfile"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    <div className="flex flex-col text-center justify-center content-center p-4 mb-2 items-center bg-sky-600 rounded-lg">
                      <h3>emailusuario@gmail.com</h3>
                      <Image
                        alt="Profilo Pic"
                        src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                        className="flex mt-4 rounded-full"
                        width={60}
                        height={60}
                        onClick={() => setToggleDropdown((prev) => !prev)}
                      />
                      <h1>
                        Olá,{" "}
                        <small className="uppercase">Nome do Usuário</small>{" "}
                      </h1>
                    </div>
                  </Link>
                  <hr className="my-4" />
                  <div className="p-2">
                    <Link
                      href={"/meusEventosLista"}
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      <div className="flex flex-row gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                        Meus Eventos
                      </div>
                    </Link>
                    <Link
                      href={"/definicoes"}
                      className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                    >
                      <div className="flex flex-row gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Definições
                      </div>
                    </Link>
                    <Link
                      href={"#"}
                      className="dropdown_link"
                      // onClick={() => meusEventos()}
                    >
                      <div className="flex flex-row gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                          />
                        </svg>
                        Tema
                      </div>
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                      }}
                      className="mt-5 w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      Terminar Sessão
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden bg-blue-500 shadow-md list-none">
            {headerList.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="text-white hover:text-blue-200 hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
