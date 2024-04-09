import PropTypes from 'prop-types';

export function Tablauser({title, children}) {
  return (
    <div className='dashboard'>
      <h1 className='title'>{title}</h1>
      <table className="table">
        <thead className='table-head'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}

Tablauser.propTypes = {
  title : PropTypes.string.isRequired,
  children : PropTypes.array.isRequired,
}