import React from "react";
import FoodCard from "./FoodCard";
import AriaKitchen from "../images/AriaKitchen.jpeg"
import CafeRioFreshModernMexican from "../images/CafeRioFreshModernMexican.jpeg"
import ElTorito from "../images/ElTorito.jpeg"
import LaCebollita from "../images/LaCebollita.jpeg"
import PuestoLosOlivos from "../images/PuestoLosOlivos.jpeg"
import PuestoParkPlace from "../images/PuestoParkPlace.jpeg"
import RubiosCoastalGrill from "../images/RubiosCoastalGrill.jpeg"
import SOLMexicanCocina from "../images/SOLMexicanCocina.jpeg"
import TacoRosa from "../images/TacoRosa.jpeg"
import TacosNCo from "../images/TacosNCo.jpeg"

const FoodList = () => {
  return (
    <div className="FoodList">
        <FoodCard name='Aria Kitchen' location='2636 Dupont Dr, Irvine' image={AriaKitchen} website="https://ariakitchen.co"/>
        <FoodCard name='Cafe Rio' location='3851 Alton Pkwy, Irvine' image={CafeRioFreshModernMexican} website="https://www.caferio.com/locations/irvine"/>
        <FoodCard name='El Torito' location='18512 MacArthur Blvd, Irvine' image={ElTorito} website="https://www.eltorito.com"/>
        <FoodCard name='La Cebollita' location='110 W MacArthur Blvd, Santa Ana' image={LaCebollita} website="https://www.la-cebollita.com"/>
        <FoodCard name='Puesto Los Olivos' location='2632 San Miguel Dr, Newport Beach' image={PuestoLosOlivos} website="https://www.eatpuesto.com/location/los-olivos/"/>
        <FoodCard name='Puesto Park Place' location='3311 Michelson Dr, Irvine' image={PuestoParkPlace} website="https://www.eatpuesto.com/location/park-place/"/>
        <FoodCard name="Rubio's Coastal Grill" location='8577 Irvine Center Dr, Irvine' image={RubiosCoastalGrill} website="https://rubios.com/restaurant-locations/california/irvine/"/>
        <FoodCard name='SOL Mexican Cocina' location='1910 Main St, Irvine' image={SOLMexicanCocina} website="https://solcocina.com"/>
        <FoodCard name='Taco Rosa' location='2632 San Miguel Dr, Newport Beach' image={TacoRosa} website="https://www.tacorosa.com"/>
        <FoodCard name='Tacos & Co' location='18092 Culver Dr, Irvine' image={TacosNCo} website="https://tacosnco.com"/>
    </div>
  )
}

export default FoodList;