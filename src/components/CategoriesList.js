import React from 'react';

function CategoriesList(props) {
    const {categories} = props
    return ( 
        <>
        {categories.length ? (
            <div className="shadow-md">
              <table className=" shadow-md text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
                <thead className="bg-gray-100 text-sm sm:text-base">
                  <tr className="uppercase">
                    <th className="tracking-wider py-3 px-4">Nombre</th>
                    <th className="tracking-wider py-3 px-4">Descripcion</th>
                    <th className="tracking-wider py-3 px-4"></th>
                    <th className="tracking-wider py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {categories?.map((category, count) => (
                    <tr
                      className={`${
                        count % 2 === 0 ? "" : ""
                      } p-10 transform ease-in-out duration-300 hover:scale-105 text-sm sm:text-base`}
                      key={category.id}
                    >
                      <td className="py-3 px-4">{category.name}</td>
                      <td className="py-3 px-4">{category.description}</td>
                      <td className="py-3 px-4 text-center">
                        <button className=" bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600">
                          Eliminar
                        </button>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button className="hover:underline">Editar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h1 className="text-center">No hay categorias existentes</h1>
          )}
          </>
    );
}

export default CategoriesList;