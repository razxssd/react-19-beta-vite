import {version} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompUseOptimistic from "./HooksExperiment/CompUseOptimistic.jsx";
import {DocumentMetadata} from "./FeaturesExperiment/DocumentMetadata.jsx";
import {Compilator} from "./FeaturesExperiment/Compilator.jsx";
import CompUseActionState from "./HooksExperiment/CompUseActionState.jsx";
import CompWithoutUseFormStatus from "./HooksExperiment/CompUseFormStatus/CompWithoutUseFormStatus.jsx";
import CompUseFormStatus from "./HooksExperiment/CompUseFormStatus/CompUseFormStatus.jsx";
import CompWithoutUseHook from "./HooksExperiment/CompUseHook/CompWithoutUseHook.jsx";
import CompWithUseHook from "./HooksExperiment/CompUseHook/CompWithUseHook.jsx";

function App() {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h2>Vite + React running version: <br/>{version}</h2>
            <p>Uncomment the features in the code to test them</p>
            <div className="card">
                {/* HOOKS */}

                {/*
                <p>useOptimistic</p>
                <CompUseOptimistic/>
                */}
                {/*
                <p>useActionState</p>
                <CompUseActionState/>
                */}
                {/*
                <p>Without useFormStatus</p>
                <CompWithoutUseFormStatus/>
                 */}
                {/*
                <p>With useFormStatus</p>
                <CompUseFormStatus/>
                */}
                {/*
                <p>Without use Hook</p>
                <CompWithoutUseHook/>
                */}
                {/*
                <p>With use Hook</p>
                <CompWithUseHook/>
                */}

                {/* OTHER FEATURES */}

                {/*
                <p>Document Metdata</p>
                <DocumentMetadata/>
                */}
                {/*
                <p>Compilator Component</p>
                <Compilator/>
                */}
            </div>
        </>
    )
}

export default App
