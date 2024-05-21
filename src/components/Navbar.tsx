export function Navbar() {
  return (
    <aside className="bg-black text-white h-full w-64 fixed top-0 left-0 z-10">
      <div className="flex flex-col items-center p-4">
        <img src="4.png" alt="Logo" className="rounded-full h-15 w-15" />
        <nav className="flex flex-col space-y-2 justify-center mt-32 mr-2 gap-3">
          <a
            href="#"
            className="text-white-300 hover:text-amber-500  rounded-md text-lg font-bold"
          >
            Início
          </a>
          <a
            href="#"
            className="text-white-300 hover:text-amber-500   rounded-md text-lg font-bold"
          >
            Sobre Nós
          </a>
          <a
            href="#"
            className="text-white-300 hover:text-amber-500   rounded-md text-lg font-bold"
          >
            Serviços
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-amber-500   rounded-md text-lg font-bold"
          >
            Contacto
          </a>
        </nav>
      </div>
    </aside>
  );
}
