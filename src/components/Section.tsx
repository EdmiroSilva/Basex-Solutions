export function Section() {
  return (
    <div className="ml-64">
      <div className="relative">
        <img
          src="https://e9df18e56f.cbaul-cdnwnd.com/3f62330aeda1193aa74548d508c8b7a6/200000018-0605f06061/images-pexels-com-photos-1797428-pexels-photo-1797428-auto-compress-cs-tinysrgb-dpr-2-h-650-w-940.webp?ph=e9df18e56f"
          alt="Header Image"
          className="w-full h-64 object-cover object-top"
        />
        <div className="flex-1 p-10">
          <h1 className="text-4xl font-bold mb-4">Sobre nós</h1>
          <p className="text-lg mb-4">
            A <span className="font-semibold">Basex Solutions</span> é uma
            empresa portuguesa fundada em <strong>1999</strong>, especializada
            na venda e distribuição de materiais de construção. Com uma vasta
            experiência no mercado, a nossa empresa tem como principal objetivo
            fornecer soluções de qualidade para profissionais e particulares na
            área da construção.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              A <span className="font-semibold">Basex Solutions</span>, fundada
              em <strong>1999</strong>, é uma empresa portuguesa dedicada à
              venda e distribuição de materiais de construção, tanto para
              profissionais como para particulares.
            </li>
            <li>
              Com uma vasta experiência no mercado, a{" "}
              <span className="font-semibold">Basex</span> oferece uma ampla
              gama de produtos de qualidade, a preços competitivos, para atender
              às necessidades dos seus clientes.
            </li>
            <li>
              A nossa equipa de profissionais altamente qualificados está sempre
              disponível para ajudar.
            </li>
          </ul>
          <a href="#" className="text-blue-500 hover:text-blue-900">
            Saiba mais →
          </a>
        </div>
      </div>

      <div className="p-10 bg-zinc-200">
        <div className="text-center mb-8">
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <h1 className="text-4xl font-bold p-10">Os nossos serviços</h1>
          <p className="text-lg">
            A <span className="font-semibold"> Basex</span> é uma empresa de
            renome no mercado de materiais de construção, atendendo às
            necessidades de profissionais e particulares desde [...]. Com uma
            vasta gama de produtos de qualidade e um serviço especializado, a
            <span className="font-semibold"> Basex</span> destaca-se pela
            excelência no atendimento ao cliente. Um dos nossos principais
            serviços é a comercialização e distribuição de materiais de
            construção.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Serviço 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Uma referência no setor, oferecendo qualidade.
              </h2>
              <p className="text-zinc-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                illo ratione quia animi illum deleniti ducimus atque voluptates
                perspiciatis! Eos odio voluptatibus amet est sit voluptate, a
                possimus veritatis nihil.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Saiba mais →
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Serviço 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Suporte técnico 24 horas
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                beatae assumenda ea dolore minima, obcaecati iure et quo. Harum
                repudiandae voluptatibus tempore eligendi voluptates! Amet qui
                facilis est provident repudiandae.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Saiba mais →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Galeria</h2>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Foto 1"
                className="w-full h-48 object-cover"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Foto 1"
                className="w-full h-48 object-cover"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Foto 1"
                className="w-full h-48 object-cover"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Foto 1"
                className="w-full h-48 object-cover"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Foto 1"
                className="w-full h-48 object-cover"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Foto 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="mt-8 md:mt-0 md:ml-8 max-w-md">
              <p className="text-md">
                A BASEX. é uma empresa fundada em 1999 que se dedica à venda e
                distribuição de materiais de construção para profissionais e
                particulares. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. A consequuntur itaque dolore nihil totam vero
                sit minus earum, iste fuga eveniet ea aspernatur quasi, neque
                soluta, et temporibus sint ad. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Soluta iste est aspernatur ab
                itaque tempora illum delectus veritatis nostrum at! Possimus hic
                nobis excepturi sint accusantium obcaecati porro facilis esse.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-zinc-200">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Nossos clientes</h2>
        </div>
        <div className="flex justify-center items-center flex-wrap space-x-4">
          <img
            src="https://via.placeholder.com/150x50"
            alt="Cliente 1"
            className="h-12 object-contain"
          />
          <img
            src="https://via.placeholder.com/150x50"
            alt="Cliente 2"
            className="h-12 object-contain"
          />
          <img
            src="https://via.placeholder.com/150x50"
            alt="Cliente 3"
            className="h-12 object-contain"
          />
          <img
            src="https://via.placeholder.com/150x50"
            alt="Cliente 4"
            className="h-12 object-contain"
          />
          <img
            src="https://via.placeholder.com/150x50"
            alt="Cliente 5"
            className="h-12 object-contain"
          />
          <img
            src="https://via.placeholder.com/150x50"
            alt="Cliente 6"
            className="h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
