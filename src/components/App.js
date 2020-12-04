import routes from '../routes/routes';
import React from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import styles from './App.module.css';
import BgImage from './BgImage/BgImage'
function App() {

	return (
		<>
			<BgImage />
			<div className={styles.container}>
				{routes.map(route => {
					return route.private ? (
						<PrivateRoute key={route.label} {...route} />
					) : (
							<PublicRoute key={route.label} {...route} />
						)
				})}
			</div>
		</>
	);
}

export default App;



