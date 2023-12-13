import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ filteredPlantList, setFilteredPlantList ] = useState([]);
  const [ plantList, setPlantList] =useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then( r => r.json() )
    .then( data => {
      setPlantList(data)
      setFilteredPlantList(data)
    })
  },[])

  function handleAddedPlant(newItem){
    setPlantList([...plantList, newItem])
    setFilteredPlantList([...filteredPlantList, newItem])
  }

  function filterPlants(word){
    const filteredPlants = plantList.filter( item => item.name.toLowerCase().includes(word))
    console.log(filteredPlants)
    setFilteredPlantList(filteredPlants);
  }

  function updatePrice(updatedItem){
    const updatedList = plantList.map(item => {
      if(item.id===updatedItem.id){
        return updatedItem;
      } else {
        return item;
      }
    })
    setPlantList(updatedList);
    const updatedFiltetedList = filteredPlantList.map(item => {
      if(item.id===updatedItem.id){
        return updatedItem;
      } else {
        return item;
      }
    })
    setFilteredPlantList(updatedFiltetedList); 
  }

  function handleDeletedPlant(deletedPlant){
    const updatedItems = plantList.filter( item => item.id !== deletedPlant.id)
    setPlantList(updatedItems)
    const updatedFilteredItems = filteredPlantList.filter( item => item.id !== deletedPlant.id)
    setFilteredPlantList(updatedFilteredItems)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddedPlant} />
      <Search filterPlants={filterPlants} />
      <PlantList plantList={filteredPlantList} updatePrice={updatePrice} handleDeletedPlant={handleDeletedPlant}/>
    </main>
  );
}

export default PlantPage;
