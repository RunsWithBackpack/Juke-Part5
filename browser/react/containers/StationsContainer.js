import { connect } from 'react-redux';
import Stations from '../components/Stations';




function sortArrOfSongs(songArr, stationsObj){
	songArr.forEach(function(song){
		if(stationsObj[song.genre]){
			stationsObj[song.genre].push(song);
		} else {
			stationsObj[song.genre] = [song];
			console.log(stationsObj);
		}
	})
}






function mapStateToProps(state, ownProps){
	var stationsObj = {}

	sortArrOfSongs(state.songs, stationsObj)

	console.log("station obj is", stationsObj);

	return {
		stations: stationsObj
	}

}

function mapDispatchToProps(dispatch, ownProps){
	return {

	}

}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);


export default StationsContainer;