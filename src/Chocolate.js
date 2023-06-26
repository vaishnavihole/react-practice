import './Chocolate.css';

function Chocolate({title, description, price}) {
    return (
      <div className="chocolate-card">
          <h2>{title}</h2>
          <p>{description}</p>
          <h2>{price}</h2>
      </div>
    )
  }
  
  export default Chocolate;