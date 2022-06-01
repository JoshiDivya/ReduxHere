// const SET_DATA=(content) =>{
// return {
//     type : 'SET_DATA',
//     content
// }
// }

// const appendData = (obj)=>{
// return((dispatch)=>{
//     dispatch(SET_DATA(obj));
// })
// }

// export default appendData;


const set_data=(dataObj)=>{
    return({
        type: 'SET_DATA',
        dataObj
    })
}

export const appendData = (dataObj) => {
 return ((dispatch)=>dispatch(set_data));
};
