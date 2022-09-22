export default function Cards(props) {
  console.log(props)
    return (
    <div className="card">
            <img src={props.item.imgUrl} alt="" />
            <div className="details">
                <h4 className="title">{props.item.title}</h4>
                <h5 className="price"><span>Price</span> : {props.item.price}</h5>
                <button className="check_here"><a href={props.item.link}>Buy here</a></button>
            </div>
            
        </div>
    )
}