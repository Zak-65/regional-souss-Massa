export function add_produit(produit){
    return(
        {type:"ADD_PRODUIT",
            payload : produit
        }
    )
}
export function delete_produit(idProduct){
    return(
    {
        type:"DELETE_PRODUIT",
        payload:idProduct
    }
)
}