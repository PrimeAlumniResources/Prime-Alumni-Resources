
import { useDispatch,useSelector } from "react-redux";


function TechKnown (props) {

{/* --------------------ALL NECESSARY CONSTANTS--------------------- */} 

    const dispatch =useDispatch()
    const stack= props.stack

{/* --------------------FUNCTION USED TO DELETE CURRENT TECH--------------------- */} 

    const handleDeleteKnownPress = () => {

        dispatch({
            type: 'DELETE_KNOWN_STACK',
            payload:{
                name: stack
            }
            
        })

        dispatch({
           type: 'DELETE_KNOWN_TECH',
           payload: {
            name:stack
        }
           
       })
     
   }


    return (

        /* --------------------CURRENT LANGUAGES CONTAINER--------------------- */

        <div key={stack} id="alert-3" className="flex text-center  item-center justify-center  pt-1 pb-1 mt-4 mb-4 w-36 ml-4   rounded-lg bg-white shadow-sm shadow-emerald-100 dark:text-emerald-400" role="alert">

        {/* --------------------CURRENT LANGUAGES NAME--------------------- */}

        <div className="ml-3 text-sm font-medium">
            {stack} <a href="#" className="font-semibold underline hover:no-underline"></a>
        </div>
        {/* --------------------DELETE LANGUAGES BUTTON-------------------- */}

        <button onClick={handleDeleteKnownPress} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-6 w-6 dark:bg-white dark:text-emerald-400 dark:hover:bg-white" data-dismiss-target="#alert-3" data-dismiss-target="#alert-3" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        
    </div>
    )
}

/**
* This file acts as the component for known techs 
* @author LuckieBah
*  6/28/2023
*/

export default TechKnown;