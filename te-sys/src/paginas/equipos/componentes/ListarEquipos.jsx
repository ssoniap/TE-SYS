import Imagenes from './Imagenes';

const ListarEquipos = () => {
    return(
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Número de serie</th>
                        <th scope="col">Nombre de equipo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Fabricante</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><img className="img-equipo" src={Imagenes.img1} alt="" width="30" height="30"></img></td>
                        <td></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td>
                        <select class="form-select w-auto" aria-label="Default select example">
                            <option selected>Estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                            <option value="3">En mantenimiento</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><td><img className="img-equipo" src={Imagenes.img2} alt="" width="30" height="30"></img></td></td>
                        <td></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><select class="form-select w-auto" aria-label="Default select example">
                            <option selected>Estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                            <option value="3">En mantenimiento</option>
                        </select></td>                        
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><img className="img-equipo" src={Imagenes.img4} alt="" width="30" height="30"></img></td>
                        <td></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder=""></input></td>
                        <td><select class="form-select w-auto" aria-label="Default select example">
                            <option selected>Estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                            <option value="3">En mantenimiento</option>
                        </select></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default ListarEquipos;