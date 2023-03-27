const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="nombre" className="text-gray-800">
          Nombre:
        </label>
        <input
          id="nombre"
          placeholder="Nombre de Cliente"
          name="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="empresa" className="text-gray-800">
          Empresa:
        </label>
        <input
          id="empresa"
          placeholder="Empresa del Cliente"
          name="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="text-gray-800">
          E-mail:
        </label>
        <input
          id="email"
          placeholder="E-mail del Cliente"
          name="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="telefono" className="text-gray-800">
          Teléfono:
        </label>
        <input
          id="telefono"
          placeholder="Teléfono del Cliente"
          name="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="notas" className="text-gray-800">
          Notas:
        </label>
        <textarea
          as="textarea"
          id="notas"
          placeholder="Notas del Cliente"
          name="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
        />
      </div>
    </>
  );
};

export default Formulario;
