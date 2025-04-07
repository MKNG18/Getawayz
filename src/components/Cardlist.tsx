import Card from "./Card"
import Data from "../data/data.json"

function Cardlist () {

    return (
        <div className="cardBox">
            {Data.map((voyages) => (
        
             <Card key={voyages.id} title={voyages.title} description={voyages.description} prix={voyages.prix} image={voyages.image}/> )
    )}
        </div>
    )
}

export default Cardlist