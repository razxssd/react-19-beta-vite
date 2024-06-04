import { useState, version } from "react";import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompUseOptimistic from "./HooksExperiment/CompUseOptimistic.jsx";
import {DocumentMetadata} from "./FeaturesExperiment/DocumentMetadata.jsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React running version: <br/>{version}</h1>
      <div className="card">
          <p>useOptimistic</p>
          <CompUseOptimistic />
          <p>Document Metdata</p>
          <DocumentMetadata />
      </div>
    </>
  )
}

export default App
