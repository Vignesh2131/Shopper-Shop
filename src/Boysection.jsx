import data from './boysdata'
import Cards from './Card-components'
export default function BoySection() {
    const cards = data.map((item) => {
        return (
            <Cards 
                key={item.id}
               item={item}
            />
       )
    })

  
    return (
        <div className="mensection" id='main-section'>
            <h2><span>Casual pullups</span> for Men</h2>
            <div className="items">
            {cards}
            </div>
           <button className='more'><a target="blank" href="https://www.ajio.com/s/shirts-4271-38471?query=%3Arelevance%3Al1l3nestedcategory%3ABoys%20-%20Shirts%3Al1l3nestedcategory%3AJunior%20Boys%20-%20Shirts%3Al1l3nestedcategory%3AMen%20-%20Shirts%3Agenderfilter%3AMen%3Apricerange%3ARs.500-1000%3Abrand%3AALLEN%20SOLLY%3Abrand%3AALTHEORY%3Abrand%3AARROW%3Abrand%3ABene%20Kleed%3Abrand%3ABritish%20Club%3Abrand%3ABuffalo%3Abrand%3ACantabil%3Abrand%3ACAVALLO%20by%20Linen%20Club%3Abrand%3ACROCODILE%3Abrand%3ACODE%20by%20lifestyle%3Abrand%3ADILLINGER%3Abrand%3ADENNISLINGO%20PREMIUM%20ATTIRE%3Abrand%3AED%20HARDY%3Abrand%3AJack%20%26%20Jones%3Abrand%3ALee%3Abrand%3ALee%20Cooper%3Abrand%3ALEVIS%3Abrand%3APepe%20Jeans%3Abrand%3APARK%20AVENUE%3Abrand%3AProdukt%20By%20Jack%20%26%20Jones%3Abrand%3AThe%20Indian%20Garage%20Co%3Abrand%3AU.S.%20Polo%20Assn.%3Abrand%3AUNITED%20COLORS%20OF%20BENETTON%3Abrand%3AVAN%20HEUSEN%3Abrand%3AWRANGLER&classifier=intent&curated=true&curatedid=shirts-4271-38471&gridColumns=3">Check for more shirts</a></button>
        </div>
    )
}