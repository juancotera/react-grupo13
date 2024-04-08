// import PropTypes from 'prop-types';
import TheatersIcon from '@mui/icons-material/Theaters';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

export function Sidebar() {
  return (
    <nav className='nav'>
      <span className="logo">Cinemovie</span>
      <div className="grupo-menu">
        <ul className="menu-items">
          <li className="menu-item"><a href="#"><TheatersIcon /> Peliculas</a></li>
          <li className="menu-item"><a href="#"><SupervisedUserCircleIcon /> Peliculas</a></li>
        </ul>
      </div>
    </nav>
  )
}

// Sidebar.propTypes = {
//   icono : PropTypes.string.isRequired,
// }