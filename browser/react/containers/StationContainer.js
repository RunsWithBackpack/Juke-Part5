import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';



function mapStateToProps(state, ownProps){
  let genre=ownProps.params.genreName;

  let songsArr=state.songs;
  let currentSong=state.currentSong;
  let isPlaying=state.isPlaying;

  let filteredSongs=songsArr.filter((songObj)=>{
    return songObj.genre===genre;
  })
  let filteredSongsWithURL=filteredSongs.map((songObj)=>convertSong(songObj));

	return {
		songs: filteredSongsWithURL,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
	}
}

function mapDispatchToProps(dispatch, ownProps){
	return {
    toggleOne: function (currentSong, songsList) {
      dispatch(toggleSong(currentSong, songsList));//remember we want to DISPATCH the thunk... not just return a thunk
    }
	}
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);


export default StationContainer;
