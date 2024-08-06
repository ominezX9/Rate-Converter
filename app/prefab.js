const Loader = () => {
    return ` <div class="loader-holder">
        <div class="loader">
            
        </div>
    </div>`;
}


const get = (url) => {

    let charset = {
        response : '',
        loading: true
    }
    return axios.get(
        url,
        {
            headers: {
                'X-CoinAPI-Key': TOKEN
            }
        }
    )
    .then(function(response){
        charset.response = response.data;
        charset.loading = false;

        //return
        return charset;
    })
    .catch(function(error){
        console.error(error);
        charset.loading = false;
        return charset;
    })
    
};
