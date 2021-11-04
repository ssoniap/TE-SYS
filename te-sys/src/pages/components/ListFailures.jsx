const ListFailures = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Ver</th>
            <th scope="col">Fecha</th>
            <th scope="col">Detalle</th>
            <th scope="col">Estado</th>
            <th scope="col">Técnico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i class="bi bi-journal-arrow-up"></i>
            </td>
            <th scope="row">dd/mm/aaaa</th>
            <td>Detalle 1</td>
            <td>Estado 1</td>
            <td>Técnico 1</td>
          </tr>
          <tr>
            <td>
              <i class="bi bi-journal-arrow-up"></i>
            </td>
            <th scope="row">dd/mm/aaaa</th>
            <td>Detalle 2</td>
            <td>Estado 2</td>
            <td>Técnico 2</td>
          </tr>
          <tr>
            <td>
              <i class="bi bi-journal-arrow-up"></i>
            </td>
            <th scope="row">dd/mm/aaaa</th>
            <td>Detalle 3</td>
            <td>Estado 3</td>
            <td>Técnico 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListFailures;
