import React, {useEffect, useContext} from 'react'
import {useSelector} from 'react-redux';
import{ActionContext} from '../contexts/ActionsContext'
const SmurfContainer = () => {
   const {actions: {fetchSmurfs}} = useContext(ActionContext);
   const {smurf, error, isLoading} = useSelector(state=> state.smurf);
   useEffect(()=>{
      fetchSmurfs();
   },[fetchSmurfs])

   return (
      <div>
         Hello
      </div>
   )
}

export default SmurfContainer;
