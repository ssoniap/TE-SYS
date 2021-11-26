import moment from "moment";
import React, { useEffect } from "react";

const ListFailures = (props) => {
  const { dataSource, handleSelectedItem, handleDeleteItem } = props;

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
              <th scope="col">Diagnóstico</th>
              <th scope="col">Técnico</th>
            </tr>
          </thead>
          <tbody>
            {dataSource &&
              dataSource.map((failure, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button onClick={() => handleSelectedItem(failure)}>
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button onClick={() => handleDeleteItem(failure)}>
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                    <td>{moment(failure.failDate).format("DD-MMM-YYYY")}</td>
                    <td>{failure.status}</td>
                    <td>{failure.diagnostic}</td>
                    <td>{failure.workerName}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ListFailures;
