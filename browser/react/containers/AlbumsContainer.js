import { connect } from 'react-redux';
import Albums from '../components/Albums';



function mapStateToProps(state, ownProps){
  console.log(state);
	return {
		albums: {
      list: state.albums.list,
    }
	}
}

function mapDispatchToProps(dispatch, ownProps){
	return {
	}
}

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);
    // return <Albums albums={this.state.list}/>;

export default AlbumsContainer;
