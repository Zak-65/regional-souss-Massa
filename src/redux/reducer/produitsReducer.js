const intialState = {
    produit:[
        {ref:7,nom:'PC HP',categorie:"informatique "},
        {ref:8,nom : "SKYWORTH",categorie:"TV"}
    ]
    }
export function produitsReducer(state=intialState,action){
    switch(action.type){
        case "ADD_PRODUIT":
            return {...state,produit:[...state.produit,action.payload]}
        case "DELETE_PRODUIT":
            return {...state,produit:[state.produit.filter(()=>!action.payload)]}
        default :
            return state
    }
}