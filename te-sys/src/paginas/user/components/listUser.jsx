
const ListarTerceros = () => {
    
    return(
        <div className="container">
            <div className="table-responsive">
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th>Usuario</th>
                        <th>Rol</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Usuario 1</td>
                            <td>Cliente</td>
                            <td>Nombre random 1</td>
                            <td>Activo</td>
                            <td>    
                                <button type="button" class="btn btn-warning mx-1">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Usuario 2</td>
                            <td>Cliente</td>
                            <td>Nombre random 2</td>
                            <td>Activo</td>
                            <td>    
                                <button type="button" class="btn btn-warning mx-1">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Usuario 3</td>
                            <td>Cliente</td>
                            <td>Nombre random 3</td>
                            <td>Activo</td>
                            <td>    
                                <button type="button" class="btn btn-warning mx-1">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Usuario 4</td>
                            <td>Cliente</td>
                            <td>Nombre random 4</td>
                            <td>Activo</td>
                            <td>    
                                <button type="button" class="btn btn-warning mx-1">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Usuario 5</td>
                            <td>Cliente</td>
                            <td>Nombre random 5</td>
                            <td>Activo</td>
                            <td>    
                                <button type="button" class="btn btn-warning mx-1">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>     
            </div>
        </div>
    );
};

export default ListarTerceros;