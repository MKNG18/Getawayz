type props = {title: string, description: string, image: string, prix: number}

function Card ({title, description, prix, image}: props) {

    return (
    <div className="cardVoyage">
        <h1>{title}</h1>
            <img src={image} alt={title}/>
            <p>{description}</p>
            <h4>Tarif: {prix}€</h4>
    </div>
)


}

export default Card