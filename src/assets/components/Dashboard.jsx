import { useState, useEffect } from 'react';
import axios from 'axios';
import { Tablelist } from './Tablelist'; // Asegúrate de importar tu componente Tablelist
import { Tabla } from './Tabla';
// import { Sidebar } from './Sidebar';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/apiProductos/products');
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
      <Tablelist title='PELICULAS'>
        {data.products.map((product) => (
          <Tabla
            key={product.id}
            id={product.id}
            titulo={product.titulo}
            estreno={product.estreno}
            clasificacion={product.clasificacion}
            idioma={product.idioma}
            fecha={product.fecha}
            duracion={product.duracion}
          />
        ))}
      </Tablelist>
  );
};

export default Dashboard;