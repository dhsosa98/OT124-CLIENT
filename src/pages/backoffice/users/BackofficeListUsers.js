import React, { useState, useEffect } from "react";
import usersServices from "../../../services/users";
import NotFoundComponent from "../../../components/Shared/Others/NotFoundComponent";
import BodyTable from "../../../components/Shared/Table/BodyTable";
import HeaderTable from "../../../components/Shared/Table/HeaderTable";
import TableLayout from "../../../components/Shared/Table/TableLayout";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import Pagination from "../../../components/Shared/Table/Pagination";
import useQueries from "../../../hooks/useQueries";
import SearchBar from "../../../components/Shared/Others/SearchBar";
import Spinner from "../../../components/Shared/Loaders/Spinner";

export default function BackofficeListUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  const getUsers = async (queries) => {
    setIsLoading(true);
    const res = await usersServices.getAllUsers(queries);
    const modified = res?.data?.users?.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    }));
    setAllUsers(modified);
    setCantItems(res?.data?.count);
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    getUsers(queries);
  }, [isLoad, queries]);

  return (
    <CenterResponsiveContainer>
      <header className="flex sm:flex-row flex-col  items-center justify-around ">
        <h1 className="sm:text-5xl text-3xl text-center text-sky-500">
          Usuarios
        </h1>
      </header>
      {
        <>
          <SearchBar />
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {allUsers?.length ? (
                <TableLayout>
                  <HeaderTable
                    columnsName={["Nombre", "Apellido", "Email", "Rol"]}
                  />
                  <BodyTable
                    isLoad={isLoad}
                    setIsLoad={setIsLoad}
                    service={usersServices.deleteUser}
                    list={allUsers}
                    bodyName={"usuario"}
                    message={"¿Desea eliminar a este usuario?"}
                    afterMessage={"Usuario eliminado con éxito"}
                  />
                </TableLayout>
              ) : (
                <NotFoundComponent title={"No se encontraron usuarios"} />
              )}
              <Pagination cantItems={cantItems} />
            </>
          )}
        </>
      }
    </CenterResponsiveContainer>
  );
}
