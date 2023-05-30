import {useEffect, useRef, useState} from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import {Sub} from '../types'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

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

function App(): JSX.Element {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const[newSubsNumber, setnewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
  setSubs(INICIAL_STATE)
}, [])

const handleNewSub = (newSub: Sub): void => {
  setSubs(subs => [...subs, newSub])
}
  return (
    <div className="App" ref={divRef}>
   <h1>midu Subs</h1>
  <List subs={subs}/>
  <Form onNewSub={handleNewSub}  />
    </div>
  );
}

export default App;
