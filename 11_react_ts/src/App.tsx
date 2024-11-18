import React, { createContext } from 'react';

//4 - Importação de componentes
import FirstComponent from './components/FirstComponent';

//5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State'
import Context from './components/Context';

//9 - type
type textOrNull = string | null

//10 - Context API
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  //1 - Variáveis
  const name: string = "Thyago"
  const age: number = 29
  const isWorking: boolean = true

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}! `
  }

  //9 - type
  const myText: textOrNull = "Tem texto aqui"
  let mySecondText: textOrNull = null

  //mySecondText = "opa"

  //10 - Context API
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
        <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Está trabalhando!</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo"/>
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {
          myText &&
          <p>Tem texto na variável</p>
        }
        {
          mySecondText && <p>Tem texto na variável</p>
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
