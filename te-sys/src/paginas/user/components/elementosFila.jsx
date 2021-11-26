const Fila = (props) => {
    const {id, user, role, name, status} = props.info;
    return (  
           
        <tr>
            <td>{user}</td>
            <td>{role}</td>
            <td>{name}</td>
            <td>{status}</td>
            <td> 
                {/* // Button trigger modal */}
                <button type="button" className="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target={"#Editar" + id}>
                    Editar usuario
                </button>
                {/* // Modal */}
                <div className="modal fade" id={"Editar" + id} tabindex="-1" aria-labelledby="EditarLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg ">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="EditarLabel">Editar usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="row justify-content-center">
                                    <div className="col-sm-12 col-md-6 col-lg-5">
                                        <div className="form-floating mb-3">
                                            <input
                                            type="text"
                                            className="form-control"
                                            id={id}
                                            value={name}
                                            required
                                            disabled
                                            />
                                            <label htmlFor={id}>Nombre de Usuario</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-5">
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="password"
                                                className="form-control"
                                                id={id} 
                                                placeholder="Escribe tus apellidos"
                                                required
                                            />
                                            <label htmlFor={id}>Contraseña</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-5">
                                        <div className="form-floating mb-3">
                                            <select
                                                className="form-select"
                                                id={id}
                                                required>
                                                <option>Rol 1</option>
                                                <option>Rol 2</option>
                                                <option>Rol 3</option>
                                            </select>
                                            <label htmlFor={id}>Lista de roles</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-5">
                                        <div className="form-floating mb-3">
                                            <select
                                                className="form-select"
                                                id={id}
                                                required>
                                                <option>Tercero 1</option>
                                                <option>Tercero 2</option>
                                                <option>Tercero 3</option>
                                            </select>
                                            <label htmlFor={id}>Lista de terceros</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-warning">Agregar cambios</button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* // Button trigger modal */}
                <button type="button" className="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target={"#Eliminar" + id}>
                    Eliminar usuario
                </button>

                {/* // Modal */}
                <div className="modal fade" id={"Eliminar" + id} tabindex="-1" aria-labelledby="EliminarLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="EliminarLabel">Eliminar usuario</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>¿Desea eliminar este usuario?</h5>
                                <h6>No podrá recuperar la información</h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">No deseo eliminar el usuario</button>
                                <button type="button" className="btn btn-danger">Si, deseo eliminar el usuario</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // Button trigger modal */}
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target={"#Inactivar" + id}>
                    Inactivar usuario
                </button>  

                <div className="modal fade" id={"Inactivar" + id} tabindex="-1" aria-labelledby="InactivarLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="InactivarLabel">Inactivar usuario</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>¿Desea inactivar este usuario?</h5>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">No deseo inactivar el usuario</button>
                                <button type="button" className="btn btn-light">Si, deseo inactivar el usuario</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </td>
        </tr> 
     );
}
 
export default Fila;