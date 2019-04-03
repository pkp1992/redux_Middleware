import { getSeriesRequest, getSeriesSuccess, getSeriesFailure} from './actions'
// import {
//   GET_SERIES_REQUEST,
//     getSeriesSuccess,
//     getSeriesFailure
// } from "./actions";


export const tvmazeFetchmiddleware = store => next => action => {
  console.log(action);

    if (action.type === getSeriesRequest.toString()) {
      fetch('http://api.tvmaze.com/shows/180/episodes', {
          method: 'GET'
      })
      .then(response => response.json())
      .then(series => {
        //   console.log(series);
          
          store.dispatch(getSeriesSuccess(series, series.length))
      })
      .catch(error => {
          store.dispatch(getSeriesFailure(error))
      })
  }
  return next(action);
};



export function execTime(store) {
    return function(next) {
        return function(action){
            console.time('redux exec')
            const result = next(action);
            console.timeEnd('redux exec')
            return result
        }
    }
}