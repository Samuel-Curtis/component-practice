import { useState } from 'react'
import './App.css'
import MainArea from './components/primary/main_area/MainArea'
import Sidebar from './components/primary/sidebar/Sidebar'
import { ComponentItem } from './models/ComponentItem'
import { components } from './data/ComponentsList'

function App() {

  // Set selectedComponent hook and default to the first one in the list 
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem>(components[0])
  
  return (
    <div className='flex'>
      <Sidebar
        allComponents={components} 
        selectedItem={selectedComponent}  
        setSelectedItem={setSelectedComponent}
      />

      <MainArea selectedItem={selectedComponent} />
    </div>
  )
}

export default App
