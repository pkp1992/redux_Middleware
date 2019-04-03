import React, { PureComponent } from "react";
import { getSeriesRequest } from "./actions";
import { LOADING_STATE} from './reducers'
import { connect } from "react-redux";
import { createActions } from 'redux-actions'
// import "./App.css";



class App extends PureComponent {
  fetchData = () => {
    this.props.getSeriesRequest();
  };
  renderEpisode = ep => (
    <div key={ep.id}>
      <img src={ep.image.original} alt={ep.name} />
      <p>{ep.name}</p>
      {/* {ep.summary.substring(3, ep.summary.length - 4)} */}
    <div dangerouslySetInnerHTML={{ __html: ep.summary }} />
    </div>
  );

  render() {
    // console.log(this.props);

    const { series, loadingState } = this.props;
    if (loadingState === LOADING_STATE.loading) {
      return <p>Please wait, Loading</p>;
    }
    if (loadingState === LOADING_STATE.failure) {
      return <p>Loading failure</p>;
    }
    return (
      <div className="App">
        <h1>FireFly</h1>
        {loadingState !== LOADING_STATE.success && <button onClick={this.fetchData}>Loading Series</button>}
        {series.map(this.renderEpisode)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loadingState: state.loadingState,
  error: state.error,
  series: state.series
});

const mapDispatchToProps = { getSeriesRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
