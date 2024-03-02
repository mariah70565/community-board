import './App.css';
import FoodList from './ components/FoodList';

const App = () => {

  return (
    <div className="App">
      <h1>🇲🇽 Mexican in Irvine 🇲🇽 </h1>
      <h2>Hello! Below is a list of recommendations for Mexican food in Irvine</h2>
      <FoodList></FoodList>
    </div>
  )
}

export default App