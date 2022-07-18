const initialState= {
    title : " "
} ; 
const changeTheId = (state = initialState , action )=>{ 

          switch (action.type){ 
        
            case "CHANGEID" : return state = action.payload.content; 
            default: return state; 
          }


}

export default changeTheId;