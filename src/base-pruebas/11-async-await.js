

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {

    try {

        const apiKey = 'fgmvIJKGZWIW7pxfMPLchV4F0HoW1Li';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        // console.log(data);
        // console.log(url);
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return `Se encontro un error` ;
    }
    
    
    
}

 getImagen();



