export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-950 mt-4 ml-60">
      <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 ml-2">
        <div className="bg-zinc-950 text-white p-4 rounded-md shadow-md flex-1">
          <h1 className="text-xl font-semibold mb-4">
            Entre em contato conosco
          </h1>
          <h2 className="text-lg font-semibold mb-4">Ligue-nos</h2>
          <p className="mb-2">(+351) 960 123 456</p>
          <p className="mb-6">(+351) 212 000 000</p>
          <h2 className="text-lg font-semibold mb-4">Localização</h2>
          <p className="mb-6">Rua xxx de xxxx nº60, 2800-104 - Seixal</p>
          <h2 className="text-lg font-semibold mb-4">Email</h2>
          <a
            href="mailto:geral@basex-solutions.com"
            className="mb-2 hover:text-zinc-400"
          >
            geral@basex-solutions.com
          </a>
        </div>
        <div className="bg-zinc-950 text-white p-4 rounded-md shadow-md flex-1">
          <h1 className="text-xl font-semibold mb-4">
            Horario de Funcionamento
          </h1>
          <h2 className="text-lg font-semibold mb-2">Segunda à Sexta</h2>
          <p className="mb-4">09h00 - 19h00</p>
          <h2 className="text-lg font-semibold mb-2">Sábado</h2>
          <p className="mb-6">09h00 - 13h00</p>
          <h2 className="text-lg font-semibold mb-4">Hórario de Almoço</h2>
          <p className="mb-4">12h00 - 13h00</p>
        </div>

        <div className="flex-1 ">
          <iframe
            className="w-full h-full rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.870783303638!2d-9.090901523665627!3d38.605844263853925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd194991b224c051%3A0xf6bf9668922624f1!2sR.%20Mariana%20de%20Andrade%2033%2C%20Arrentela!5e0!3m2!1spt-PT!2spt!4v1715980299177!5m2!1spt-PT!2spt"
          ></iframe>
        </div>
      </div>

      <div className="bg-zinc-950 text-white p-6 border-t border-zinc-500">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Basex Solutions. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Desenvolvido por
            <span className="text-white hover:text-zinc-400 cursor-pointer">
              {" "}
              <a href="https://edmirosilva.github.io/Portfolio-Edmiro-Silva/">
                Edmiro Silva
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
