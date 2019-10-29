import {useCallback} from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { FETCH_SMURFS_START, FETCH_SMURFS_ERROR } from '../components/smurfs';

export const useSmurfActions =() =>{
   const dispatch = useDispatch();

   const fetchSmurfs = useCallback(()=>{
      dispatch({type: FETCH_SMURFS_START});
      axios
      .get('http://localhost:3333/smurfs')
      .then(response =>{

      })
      .catch(error=> dispatch({type: FETCH_SMURFS_ERROR, payload:error.response}))
   }, [dispatch])
   return {fetchSmurfs}
}

