import PropTypes from 'prop-types';

export function Tablau ({id, nombre, email}) {
  return (
      <tr className='table-rows-populate'>
        <th scope="row">{id}</th>
        <td>{nombre}</td>
        <td>{email}</td>
      </tr>
  )
}

Tablau.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string,
  email: PropTypes.string,
};