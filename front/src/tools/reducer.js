const reducer = (state, action) =>{
    switch(action.type){
        case "ADD_DRAGON":
            if(state.inputValue.trim()===""){
                return console.log("Champ vide")
            }else if(state.dragons.includes(action.payload)){
                return console.log("Dragon déja existe")
            }else{
                return {
                    ...state,
                    dragons: [...state.dragons, state.inputValue],
                    inputValue:""
                }
            }
        default:
            return state;
    }
}
        
export { reducer }