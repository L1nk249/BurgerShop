import { useState } from 'react';
import Burger from './Burger';
import styles from '../styles/Home.module.css';




function Home() {

  const [selectedBurgers,setSelectedBurgers]=useState([0])

const selectBurger= (newBurger)=>{
setSelectedBurgers([...selectedBurgers,newBurger])}


const removeBurger= (burgerToDelete)=>{

  {setSelectedBurgers(selectedBurgers.filter(e=>e !==burgerToDelete))}

}
  
  const burgersData = [
    { name: 'The New Yorker', image: 'newyorker.jpg' },
    { name: 'The Californian', image: 'californian.jpg' },
    { name: 'The Parisian', image: 'parisian.jpg' },
  ];

  const burgers = burgersData.map((data, i) => {
    return <Burger key={i} name={data.name} image={data.image} selectBurger={selectBurger} removeBurger={removeBurger} />;






  });

  return (
    <div className={styles.container}>
     
     
      <img src="logo.png" className={styles.logo} />
      <h4 className={styles.text}>Number of burgers selected:{selectedBurgers.length-1} <span id="counter"></span></h4>
      
      <div className={styles.burgerContainer}>
        {burgers}
      </div>
     
    </div>
  );
}

export default Home;
