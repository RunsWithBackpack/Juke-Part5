import React from 'react';
import {Link} from 'react-router';


function Stations(props){

	// const DUMMY_STATIONS_DATA = [
	//   { name: '90s Hip Hop' },
	//   { name: 'Death Metal' },
	//   { name: 'Classical' }
	// ];

	const stationsData = Object.keys(props.stations);

	console.log("stations props is", props);
	return (

		    <div>
		      <h3>Stations</h3>
		      <div className="list-group">
		      {
		        stationsData.map(station => {
		          return (
		            <div className="list-group-item" key={station}>
		              <Link to={'fill/me/in/later'}>{station}</Link>
		            </div>
		          );
		        })
		      }
		      </div>
		    </div>
	

	)

}

export default Stations;