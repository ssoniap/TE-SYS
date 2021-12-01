import React from "react";

const ListPersons = (props) => {
  const { dataSource, handleSelectedItem, handleDeleteItem } = props;

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Documento</th>
              <th scope="col">Nombre</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Telefono</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            {dataSource &&
              dataSource.map((person, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button onClick={() => handleSelectedItem(person)}>
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button onClick={() => handleDeleteItem(person)}>
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                    <td>{person.identityDocument}</td>
                    <td>{`${person.firstName} ${person.lastName}`}</td>
                    <td>{person.city}</td>
                    <td>{person.phone}</td>
                    <td>{person.roleName}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ListPersons;
