import React, { useState } from "react";

function PlantCard({ plant,updatePrice, handleDeletedPlant }) {

  const {id, name, image, price } = plant
  const [ isStock, setIsStock ] = useState(true)
  const [ newPrice, setNewPrice ] = useState("")

  function isStockClick(){
    setIsStock(!isStock);
  }

  function changePriceButton(e){
    e.preventDefault();
    console.log(plant, parseFloat(newPrice))
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: parseFloat(newPrice),
      })
    })
    .then( r => r.json() )
    .then( updatedPlant => updatePrice(updatedPlant) )
  }

  function deleteButtonClick(e){
    e.preventDefault();
    console.log(plant, "clicked")
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "DELETE",
    })
    .then( r => r.json() )
    .then( () => handleDeletedPlant(plant) )
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <form onSubmit={changePriceButton} >
        <input type="text" placeholder="New price" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
        <button>Change price</button>
      </form>
      {isStock ? (
        <button className="primary" onClick={isStockClick} >In Stock</button>
      ) : (
        <button  onClick={isStockClick} >Out of Stock</button>
      )}
      <br/>
      <button onClick={deleteButtonClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
