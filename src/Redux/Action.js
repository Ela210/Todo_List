import { ADD, DELETE_TODO, DONE, EDIT } from "./ActionTypes"

export const add_todo = (newItem)=>{
    return{
        type:ADD ,payload:newItem
    }

}
export const delete_todo =(id)=>{
    return{
        type:DELETE_TODO ,payload:id
    }
}
export const edit_todo =(id,item)=>{
    return{
        type:EDIT, payload:{id,item}
    }
}
export const done_todo =(id)=>{
    return {
        type:DONE , payload:id
    }
}