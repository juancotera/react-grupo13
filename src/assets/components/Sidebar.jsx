import PropTypes from 'prop-types';
import TheatersIcon from '@mui/icons-material/Theaters';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className='nav'>
      <span className="logo">Cinemovie</span>
      <div className="grupo-menu">
        <ul className="menu-items">
          <li className="menu-item"><Link to="/Dashboard"><TheatersIcon /> Peliculas</Link></li>
          <li className="menu-item"><Link to="/Userlist"><SupervisedUserCircleIcon /> Usuarios</Link></li>
        </ul>
      </div>
    </nav>
  )
}

Sidebar.propTypes = {
  icono : PropTypes.string,
}
