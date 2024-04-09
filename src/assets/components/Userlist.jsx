import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Tablauser } from './Tablauser';
import { Tablau } from './Tablau';
// import { Sidebar } from './Sidebar';

function Userlist() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('http://localhost:3000/apiUsuario/users/')
    .then(response => response.json())
    .then(data => {
      setUsers(data.users);
      // console.log(data.users); //ES PARA VER QUE DEVUELVE LA API
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
}, []);

if (loading) {
  return <div>Cargando usuarios...</div>;
}

  return (
      <Tablauser title='USER LIST'>
        {users.map((user) => (
          <Tablau
            key={user.id}
            id={user.id}
            nombre={user.nombre}
            email={user.email}
          />
        ))}
      </Tablauser>
  );
}

export default Userlist;