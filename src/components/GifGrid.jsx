export const GifGrid = ({category}) => {

  const getGifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qg1pvYB3j3MRWnaXQfR3KHi67UuXJTch&q=${category}`;
    const resp = await fetch(url);
    console.log(resp);
  }
  return (
    <>
        <h3>{category}</h3>
        <p>Hola mundo</p>
    </>
  )
}
