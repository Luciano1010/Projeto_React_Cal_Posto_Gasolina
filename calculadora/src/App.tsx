import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
    return (
      <div>
        <main className='container'>
          <img 
          src={logoImg}
          alt="Logo da calculadora de gasolina ou alcool"/>

          <h1 className='title'>Qual é a melhor opção?</h1>

          <form>
            <label>Alcool (preço por litro)</label>
            <input 
            className='input'
            type='number'
            placeholder="4,90"
            min="1"
            step="0,01"
            required
            >
            </input>

            <label>Gasolina(preço por litro)</label>
            <input 
            className='input'
            type='number'
            placeholder="4,90"
            min="1"
            step="0,01"
            required
            >
            </input>

            <input className='button' type="submit" value="calcular">
              
            </input>
          </form>
        </main>
     </div>
  )
}
      
export default App
