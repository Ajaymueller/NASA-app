import axios from 'axios';

const getImages = (query) => {
    if (!query) {
        return Promise.resolve([]);
    } else {
        axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            console.log(response)
            .catch((error) => {
                console.log(error)
            })
    
        })
    }
}

export default getImages