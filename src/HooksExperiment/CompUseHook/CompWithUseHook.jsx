import {Suspense, use, useState} from "react";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import {Button} from "../../components/Button.jsx";

const TODO_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos?_limit=10'
const POSTS_ENDPOINT = 'https://ejsonplaceholder.typicode.com/posts?_limit=10'

function CompWithUseHook() {
    const [url, setUrl] = useState(TODO_ENDPOINT)
    const [shouldCallList, setShouldCallList] = useState(true)
    const isTodoURL = url.includes(TODO_ENDPOINT)
    const fetchDataPromise = fetch(url).then((response) => response.json())

    return (
        <>
            <Button isActive={isTodoURL} text={'Todo List'} onClick={() => setUrl(TODO_ENDPOINT)}/>
            <Button isActive={!isTodoURL} text={'Posts List'} onClick={() => setUrl(POSTS_ENDPOINT)} className={'ml-10'} />
            <br/>

            <ErrorBoundary fallback={<h1>ERROR</h1>}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <DetailList fetchDataPromise={fetchDataPromise} shouldCallList={shouldCallList}/>

                    <Button isActive={shouldCallList} text={'Should call list?'} onClick={() => setShouldCallList(!shouldCallList)} className={'mt-10'} />
                </Suspense>
            </ErrorBoundary>
        </>
    )
}

const DetailList = ({fetchDataPromise, shouldCallList}) => {
    let list = []
    // We cannot declare here the promise otherwise we will receive a React Warning
    // list = use(fetchDataPromise)

    console.log('shouldCallList: ', shouldCallList)
    if (shouldCallList) {
        list = use(fetchDataPromise)
    }

    return <div>
        {list.map(data => (<div key={data.id}>{data.title}</div>))}
    </div>
}

export default CompWithUseHook
