import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, updatePrice, handleDeletedPlant }) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantList.map(plant => <PlantCard plant={plant} key={plant.id} updatePrice={updatePrice} handleDeletedPlant={handleDeletedPlant}/>)}
    </ul>
  );
}

export default PlantList;
