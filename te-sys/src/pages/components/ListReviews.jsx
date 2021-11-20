import moment from "moment";
import React, { useEffect } from "react";

const ListReviews = (props) => {
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
              dataSource.map((review, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button onClick={() => handleSelectedItem(review)}>
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button onClick={() => handleDeleteItem(review)}>
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                    <td>{moment(review.reviewDate).format("DD-MMM-YYYY")}</td>
                    <td>{review.status}</td>
                    <td>{review.diagnostic}</td>
                    <td>{review.workerName}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ListReviews;
