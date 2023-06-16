
import { useDispatch,useSelector } from "react-redux";


function TechKnown (props) {

    const dispatch =useDispatch()

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

     const stack= props.stack
    return (
        <div key={stack} id="alert-3" className="flex p-4 mt-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">

        <div className="ml-3 text-sm font-medium">
            {stack} <a href="#" className="font-semibold underline hover:no-underline"></a>
        </div>
        <button onClick={handleDeleteKnownPress} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
    )
}

export default TechKnown;