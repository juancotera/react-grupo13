import PropTypes from 'prop-types';

export function Tablelist({title, children}) {
  return (
    <div className='dashboard'>
      <h1 className='title'>{title}</h1>
      {children}
    </div>
  )
}

Tablelist.propTypes = {
  title : PropTypes.string.isRequired,
  children : PropTypes.object.isRequired,
}