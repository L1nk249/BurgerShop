import styles from '../styles/Burger.module.css';

function Burger(props) {
	const handleClick= () => {
		props.selectBurger(props.name)
		};


		const removeClick= () => {
			props.removeBurger(props.name)
			
			};
	






	return (
		<div className={styles.container}>
			
			<h2 className={styles.name}>{props.name}</h2>
			<img className={styles.images} src={props.image} />
			<div className={styles.btnContainer}>{props.name}
			<button className={styles.selectBtn}onClick={()=>handleClick()}>Select</button>
			<button className={styles.removeBtn}onClick={()=>removeClick()}>Remove all</button>

			</div>
		</div>
	);
}

export default Burger;
