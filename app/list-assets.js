// get(`${BASE_URL}/v1/assets`).then(({response, loading}) => {
//     if(loading) {
//         console.log("Loading ... ");
//     }else{
//         console.log(response);
//     }
// })

get(`${BASE_URL}/v1/assets`).then(({response, loading}) => {
    if(loading) {
        console.log("Loading ... ");
    }else{
        console.log(response);
    }
})

// console.log(charset);