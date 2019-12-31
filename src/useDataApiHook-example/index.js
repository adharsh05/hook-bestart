import React,  { Fragment, useState, useEffect, useReducer, } from 'react';
import axios from  'axios';

const dataFetchReducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_INIT':
         return { ...state, isLoading:true, isError:false };
        case 'FETCH_SUCCESS':
         return {
             ...state,
             isLoading: false,
             isError:  false,
             data: action.payload
         };
         case 'FETCH_FAILURE':
         return {
             ...state,
             isLoading: false,
             isError: true,
         }
        default:
        throw new Error();
    }
};

const useDataApi =  (initialUrl, initialData) => {
    const  [url, setUrl] = useState(initialUrl);
    

}