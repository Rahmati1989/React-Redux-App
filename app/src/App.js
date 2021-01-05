import './App.css';
import { connect } from 'react-redux';
import {getFacts} from './actions'
import './App.css';

function App(props) {
  const buttonClick = (e) =>{
    e.preventDefault();
    props.getFacts();
  }
  return (
    <div className="App">
      {console.log(props)}
      <h1>Cat Call API</h1>
      <button onClick={buttonClick}>Cat Call!</button>
      {props.loading && <p>Loading . . .</p>}
      {props.data.map(a => <p>{a.text}</p>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading
  
  }
}

export default connect(mapStateToProps, {getFacts})(App)