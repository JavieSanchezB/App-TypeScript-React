import {useEffect, useState} from 'react';
import './App.css';
import List from './components/List'

const INICIAL_STATE =[
  {
    nick:'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador un par de veces'

},
{
  nick:'jose perez',
  subMonths: 5,
  avatar: 'https://i.pravatar.cc/150?u=joseperez'

}
]

interface sub{
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

interface AppState {
  subs: Array<sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const[newSubsNumber, setnewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
useEffect(()=>{
  setSubs(INICIAL_STATE)
}
)

  return (
    <div className="App">
   <h1>midu Subs</h1>
  <List subs={subs}></List>
    </div>
  );
}

export default App;
