// import React from 'react'
import ReactDOM from 'react-dom/client'

import { Tabla } from './assets/components/Tabla'
import { Tablelist } from './assets/components/Tablelist'
import { Sidebar } from './assets/components/Sidebar'
import './assets/css/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Sidebar />
    <Tablelist title='DASHBOARD'>
      <Tabla
        id = {2536}
        titulo = 'El señor de los anillos'
        estreno='no'
        clasificacion='Para todos'
        idioma='Ingles'
        fecha='25/08/2000'
        duracion='2:25:06'
      ></Tabla>
    </Tablelist>
  </>
)