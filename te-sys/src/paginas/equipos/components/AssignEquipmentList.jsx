const ListarEquiposAsignar = () => {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Asignar</th>
              <th scope="col">Imagen</th>  
              <th scope="col">Serial</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>
            <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check1"></input>
            </div>
            </td> 
            <td>
                <i class="fas fa-eye"></i>
              </td>
              <td>Serial 1</td>
              <td>Equipo 1</td>
              <td>Descripcion 1</td>
              <td>Estado 1</td>
            </tr>
            <tr>
            <td>
            <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check2"></input>
            </div>
            </td>  
            <td>
              <i class="fas fa-eye"></i>
            </td>
            <td>Serial 2</td>
            <td>Equipo 2</td>
            <td>Descripcion 2</td>
            <td>Estado 2</td>
          </tr>
          <tr>
          <td>
            <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check3"></input>
            </div>
            </td>
            <td>
              <i class="fas fa-eye"></i>
            </td>
            <td>Serial 3</td>
            <td>Equipo 3</td>
            <td>Descripcion 3</td>
            <td>Estado 3</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ListarEquiposAsignar;
  