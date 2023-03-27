const Clientes = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6 space-y-2">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>

        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {telefono}
        </p>
      </td>

      <td className="p-6 flex gap-3">
        <button
          type="buttton"
          className="text-blue-600 p-3 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white uppercase font-bold text-xs"
        >
          Editar
        </button>

        <button
          type="buttton"
          className="text-red-600 p-3 rounded-lg border border-red-600 hover:bg-red-600 hover:text-white uppercase font-bold text-xs"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Clientes;