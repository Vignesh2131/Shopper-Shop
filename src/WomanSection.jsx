import data from "./womensdata"
import Cards from "./Card-components"
export default function WomanSection() {
    const cards = data.map((item) => {
        return (
            <Cards 
                key={item.id}
               item={item}
            />
       )
    })

    return (
        <div className="womensection">
            <h2><span>Simple ethnic</span> goers for Women</h2>
            <div className="items">
            {cards}
            </div>
           <button className='more'><a target="_blank" href="https://www.ajio.com/search/?query=%3Arelevance%3Apricerange%3ARs.500-1000&text=Ethnic%20wear&classifier=intent&gridColumns=3">Check for more Ethnic</a></button>
        </div>
    )
}