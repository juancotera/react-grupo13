//en react todos los componentes empiezan con mayusculas
//para que estos puedanser reconocidas y renderzadas

import PropTypes from 'prop-types';

export function Tabla ({id, titulo, estreno, clasificacion, idioma, fecha, duracion}) {
  return (
      <tr className='table-rows-populate'>
        <th scope="row">{id}</th>
        <td>{titulo}</td>
        <td>{estreno}</td>
        <td>{clasificacion}</td>
        <td>{idioma}</td>
        <td>{fecha}</td>
        <td>{duracion}</td>
      </tr>
  )
}

Tabla.propTypes = {
  id: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  estreno: PropTypes.number.isRequired,
  clasificacion: PropTypes.string.isRequired,
  idioma: PropTypes.string.isRequired,
  fecha: PropTypes.string,
  duracion: PropTypes.number.isRequired,
};