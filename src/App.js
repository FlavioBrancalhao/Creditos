import React, { useState, useEffect, useMemo, useCallback} from 'react';
import './style.css'


function App(){

  const [tarefas, setTarefas] = useState([]);

const [Input, setInput] = useState('');


useEffect(() =>{
  const tarefasStorage = localStorage.getItem('tarefas');
  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage));
  }

}, [])

useEffect(()=> {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
 

}, [tarefas]);

const handleAdd = useCallback(() => {
  setTarefas([...tarefas, Input])
  setInput('');
}, [tarefas, Input])

const totalTarefas = useMemo(() => tarefas.length, [tarefas]);


  return(
    <div className='container'>
      <h1>Créditos</h1>
      <h1>{tarefas.map(tarefa => (
        <li key={tarefa} > {tarefa}</li>
      ))}</h1>
        
        
       
        
        <div className='floating'>
        <strong> Voce tem {totalTarefas} Pessoas creditadas</strong>
        
        <input type="text" value={Input} placeholder="Adicionar Nome" onChange={e => setInput(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Adicionar</button>
        </div>
    </div>
  );
}
export default App

