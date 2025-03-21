import React from 'react'
import ReactDOM from 'react-dom/client'
import { YeastSimulation } from './YeastSimulation'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 w-full">
      <YeastSimulation />
    </div>
  </React.StrictMode>,
)