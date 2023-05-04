export const GifGrid = ({category}) => {

  const getGifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qg1pvYB3j3MRWnaXQfR3KHi67UuXJTch&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: images.downsized_medium.url
    }));
    console.log(gifs);
  }
  getGifs();
  return (
    <>
        <h3>{category}</h3>
        <p>Hola mundo</p>
    </>
  )
}
