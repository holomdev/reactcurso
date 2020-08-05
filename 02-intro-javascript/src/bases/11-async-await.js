const getImage = async () => {
    try {
        const apiKey = 'vua66LK5lzSJ4qmQQtRIIknYkb9HomPN';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    } catch (error) {
        console.error('Hubo algun tipo de error');
    }
}

getImage().then(url => {
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
});
