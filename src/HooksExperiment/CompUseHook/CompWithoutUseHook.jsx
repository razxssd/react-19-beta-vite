import { useEffect, useState} from "react";
import {Button} from "../../components/Button.jsx";

const TODO_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos?_limit=10'
const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

function CompWithoutUseHook() {
    const [url, setUrl] = useState(TODO_ENDPOINT)
    const isTodoURL = url.includes(TODO_ENDPOINT)
    return (
        <>
            <Button isActive={isTodoURL} text={'Todo List'} onClick={() => setUrl(TODO_ENDPOINT)}/>
            <Button isActive={!isTodoURL} text={'Posts List'} onClick={() => setUrl(POSTS_ENDPOINT)} className={'ml-10'} />
            <br/>
            <DetailList url={url}/>
        </>
    )
}

const DetailList = ({url}) => {
    const [list, setList] = useState([])
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        setHasError(false);

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setList(json)
            })
            .catch((error) => {
                console.log('error: ', error)
                setHasError(true)
            })
            .finally(() => setIsLoading(false))
    }, [url])

    return <div>
        {isLoading ? <h1>Loading...</h1> :
            hasError ? <h1>ERROR</h1> :
                isLoading ? 'Loading...' : list.map(data => (<div key={data.id}>{data.title}</div>))
        }
    </div>
}




export default CompWithoutUseHook

