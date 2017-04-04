import React from 'react';
import {Link} from 'react-router';


function Stations(props){

	// const DUMMY_STATIONS_DATA = [
	//   { name: '90s Hip Hop' },
	//   { name: 'Death Metal' },
	//   { name: 'Classical' }
	// ];

	// stations:
	// {
	//	Ambient: [songobj1,songobj2]
	// 	Rock: [songobj1,songobj2]
// }

	const stationsData = Object.keys(props.stations);
	// [Ambient, Rock]

	// console.log("stations props is", props);
	return (

		    <div>
		      <h3>Stations</h3>
		      <div className="list-group">
		      {
		        stationsData.map(stationName => {
		          return (
		            <div className="list-group-item" key={stationName}>
		              <Link to={`/stations/${stationName}`}>{stationName}</Link>
		            </div>
		          );
		        })
		      }
		      </div>
		    </div>


	)

}

export default Stations;
