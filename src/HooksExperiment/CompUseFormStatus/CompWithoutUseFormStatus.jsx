import {useState} from "react";

const LIST = [
    "Presentazione useFormStatus",
    "Secondo elemento useFormStatus",
]
async function createItem (item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 1000)
    })
}

function CompWithoutUseFormStatus() {
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState(LIST)

    const onAddItemHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const item = await createItem(inputValue)
        setIsLoading(false)
        setList(state => [...state, item])
    }

    return (
        <form onSubmit={onAddItemHandler}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type={'submit'} disabled={isLoading}>{isLoading ? 'Loading...' : 'Add List Item'}</button>
            <div style={{marginTop: '10px'}}>
                {
                    list.map((listItem, id) => (
                        <div key={id}>
                            {listItem}
                        </div>
                    ))
                }
            </div>
        </form>
    )
}

export default CompWithoutUseFormStatus


