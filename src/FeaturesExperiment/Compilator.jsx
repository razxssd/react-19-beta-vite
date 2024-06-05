import {useState} from "react";

export const Compilator = () => {
    console.log('Compilator component')
    const [inputValue, setInputValue] = useState('')

    return <div>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <Child1/>
        <Child2 title={inputValue}/>
    </div>
}

export const Child1 = () => {
    console.log('Child1')
    return <div>
        Child1 it's static
    </div>
}

export const Child2 = ({title}) => {
    console.log('Child2: ', title)
    return <div>
        Child2: {title}
    </div>
}
