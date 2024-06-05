import {useActionState} from "react";

/**
 * Our action
 */
export async function addToCart(prevState, queryData) {
    const itemID = queryData.get('itemID');
    if (itemID === "1") {
        return "Added to cart";
    } else {
        return "Couldn't add to cart: the item is sold out.";
    }
}

function CompUseActionState() {
    return (
        <>
            <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
            <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
        </>
    )
}

function AddToCartForm({itemID, itemTitle}) {
    const [message, formAction] = useActionState(addToCart, null);
    return (
        <form action={formAction}>
            <h2>{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button type="submit">Add to Cart</button>
            {message}
        </form>
    );
}






export default CompUseActionState
