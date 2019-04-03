import { createActions } from "redux-actions";

const {
  series: {
    getRequest: getSeriesRequest,
    getSuccess: getSeriesSuccess,
    getFailure: getSeriesFailure
  }
} = createActions({
  SERIES: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});

export { getSeriesRequest, getSeriesSuccess, getSeriesFailure };
// const {
//     series: {request: getSeriesRequest, success: getSeriesSuccess, failure: getSeriesFailure},
// } = createActions ({
//     SERIES: {
//         REQUEST: null,
//         SUCCESS: [series => series, (series,pageCount) => ({pageCount})],
//         FAILURE: null,
//     }
// })

// getSeriesSuccess([1,2,3,4], 20)
// // {type: 'SERIES/SUCCESS', payload: [1,2,3,4], meta: {pageCount: 20}}

// export { getSeriesRequest, getSeriesSuccess, getSeriesFailure}

// export const GET_SERIES_REQUEST = "GET_SERIES_REQUEST";
// export const GET_SERIES_SUCCESS = "GET_SERIES_SUCCESS";
// export const GET_SERIES_FAILURE = "GET_SERIES_FAILURE";

// export const getSeriesRequest = () => ({
//   type: GET_SERIES_REQUEST
// });
// // export const getSeriesRequest = createActions("GET_SERIES_REQUEST");

// export const getSeriesSuccess = payload => ({
//   type: GET_SERIES_SUCCESS,
//   payload
// });
// export const getSeriesFailure = error => ({
//   type: GET_SERIES_FAILURE,
//   error
// });