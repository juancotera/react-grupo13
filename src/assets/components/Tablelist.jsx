import PropTypes from 'prop-types';

export function Tablelist({title, children}) {
  return (
    <div className='dashboard'>
      <h1 className='title'>{title}</h1>
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
          {children}
        </tbody>
      </table>
    </div>
  )
}

Tablelist.propTypes = {
  title : PropTypes.string.isRequired,
  children : PropTypes.array.isRequired,
}