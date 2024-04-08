//en react todos los componentes empiezan con mayusculas
//para que estos puedanser reconocidas y renderzadas

import PropTypes from 'prop-types';

export function Tabla ({id, titulo, estreno, clasificacion, idioma, fecha, duracion}) {
  return (
  <table className="table">
    <thead className='table-head'>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Título</th>
        <th scope="col">Estreno</th>
        <th scope="col">Clasificación</th>
        <th scope="col">Idioma</th>
        <th scope="col">Fecha</th>
        <th scope="col">Duración</th>
      </tr>
    </thead>
    <tbody>
      <tr className='table-rows-populate'>
        <th scope="row">{id}</th>
        <td>{titulo}</td>
        <td>{estreno}</td>
        <td>{clasificacion}</td>
        <td>{idioma}</td>
        <td>{fecha}</td>
        <td>{duracion}</td>
      </tr>
    </tbody>
  </table>
  )
}

Tabla.propTypes = {
  id: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  estreno: PropTypes.string.isRequired,
  clasificacion: PropTypes.string.isRequired,
  idioma: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  duracion: PropTypes.string.isRequired,
};