import {useOptimistic, useState} from "react";

const LIST = [
    "Presentazione React 19",
    "Presentazione React Query",
    "Presentazione RTK Query"
]
async function createItem (item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 1000)
    })
}

function CompUseOptimistic() {
    const [inputValue, setInputValue] = useState('')
    const [list, setList] = useState(LIST)
    const [optimisticList, setOptimisticList] = useOptimistic(list);

    const onAddItemHandler = async () => {
        setOptimisticList((prev) => ([...prev, `${inputValue} (Loading for update...)` ]));
        const item = await createItem(inputValue)
        setList(state => [...state, item])
    }

    return (
        <form action={onAddItemHandler}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type={'submit'}>Add List Item</button>
            <div style={{marginTop: '10px'}}>
                {
                    optimisticList.map((listItem, id) => (
                        <div key={id}>
                            {listItem}
                        </div>
                    ))
                }
            </div>
        </form>
    )
}

export default CompUseOptimistic
