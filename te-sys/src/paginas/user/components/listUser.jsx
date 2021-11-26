import Fila from "./elementosFila";

const ListarTerceros = () => {
    const datosPrueba = [
        {id: 1, user: "Usuario Random 1", role: "Rol Random 1", name:"Nombre Random 1", status: "Estado Random 1"},
        {id: 2, user: "Usuario Random 2", role: "Rol Random 2", name:"Nombre Random 2", status: "Estado Random 2"},
        {id: 3, user: "Usuario Random 3", role: "Rol Random 3", name:"Nombre Random 3", status: "Estado Random 3"},
        {id: 4, user: "Usuario Random 4", role: "Rol Random 4", name:"Nombre Random 4", status: "Estado Random 4"}
    ];

    return(
        <div className="container">
            <div className="mt-3">
                <h2>Lista de usuarios</h2>
            </div>
            <div className="table-responsive">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosPrueba.map((fila) => {
                            return(
                                <Fila
                                    key={fila.id} 
                                    info={{
                                        id: fila.id,
                                        user: fila.user, 
                                        role: fila.role, 
                                        name: fila.name, 
                                        status: fila.status
                                    }}
                                />
                            )
                        })};
                    </tbody>
                </table>    
            </div>
        </div>
    );
};

export default ListarTerceros;