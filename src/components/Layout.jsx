import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-white text-4xl font-black text-center">
            CRM - Clientes
          </h2>

          <nav className="mt-10">
            <Link
              className={`${
                location.pathname === "/" ? "text-blue-400" : "text-white"
              } text-2xl block mt-2 hover:text-blue-300 text-white`}
              to="/"
            >
              Clientes
            </Link>

            <Link
              className={`${
                location.pathname === "/clientes/nuevo"
                  ? "text-blue-400"
                  : "text-white"
              } text-2xl block mt-2 hover:text-blue-300 text-white`}
              to="/clientes/nuevo"
            >
              Nuevo Cliente
            </Link>
          </nav>
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
