import {Fragment, useState} from "react";
import {useFormStatus} from 'react-dom';

const LIST = [
    "Presentazione useFormStatus",
    "Secondo elemento useFormStatus",
]
async function createItem(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 1000)
    })
}

function CompUseFormStatus() {
    const [list, setList] = useState(LIST)

    return (
        <form action={async (formData) => {
            const item = await createItem(formData.get('inputValue'))
            setList(state => [...state, item])
        }}>
            <ListItemsForm list={list}/>
        </form>
    )
}

const ListItemsForm = ({list}) => {
    const {pending, data} = useFormStatus();

    return <Fragment>
        <input name='inputValue'/>
        <button type={'submit'} disabled={pending}>{pending ? `Data in submitting (${data.get('inputValue')})...` : 'Add List Item'}</button>
        <div style={{marginTop: '10px'}}>
            {
                list.map((listItem, id) => (
                    <div key={id}>
                        {listItem}
                    </div>
                ))
            }
        </div>
    </Fragment>
}




export default CompUseFormStatus


