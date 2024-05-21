import { PropsWithChildren } from "react";

function MenuItem({ children }: PropsWithChildren) {
  return (
    <a
      href="#"
      className="text-white-300 hover:text-amber-500 rounded-md text-lg font-bold"
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const items = ["Início", "Sobre Nós", "Serviços", "Contato"];

  return (
    <aside className="bg-black text-white h-full w-64 fixed top-0 left-0 z-10">
      <div className="flex flex-col items-center p-4">
        <img src="4.png" alt="Logo" className="rounded-full h-15 w-15" />
        <nav className="flex flex-col space-y-2 justify-center mt-32 mr-2 gap-3">
          {items.map((item, key) => (
            <MenuItem key={key}>{item}</MenuItem>
          ))}
        </nav>
      </div>
    </aside>
  );
}
