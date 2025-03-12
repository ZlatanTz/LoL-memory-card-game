export default function Card({name, img}){
    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${img}`
    return (<div className = "cardContainer">  
        <img src={imageUrl} alt={img} />
        <h2>{name}</h2>
    </div>)
}