import './ResourcesPage.css'
import AddResource from './AddResource';
import ResourceItem from './ResourceItem';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { teal, cyan } from '@mui/material/colors';

function ResourcesPage() {
    const primary = teal['A200']; 
   
    const dispatch = useDispatch()

    // This useEffect is simultaniouly getting all resources and all existing tags without repeats
    // from the database
    useEffect(() => {
        dispatch({
            type: 'SAGA/GET_RESOURCE'
        });
        dispatch({
            type: 'SAGA/GET_RESOURCE_TAGS'
        });
    }, []);

    // resources is an array of objects from the redux store
    const resources = useSelector(store => store.resources);
    // resourceTags is also an array of objects which holds all existing tags from the redux store
    const resourcesTags = useSelector(store => store.resourceTags);

    // filter is changed depending on what tag gets clicked, if its empty strings then all
    // resources will show, empty string is default
    const [filter, setFilter] = useState('');

    // The following useState and both functions are responsible for the modal rendering
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // tagFilter is used to change filter state to be used to conditionally render the resourse pertaining
    // to the tag that gets clicked 
    const tagFilter = (e) => {
        setFilter(e.target.innerHTML)
    }

    // This style object is responsible for the modal styling and size. Because its a material ui
    // modal, this is the way to style it
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 550,
        height: 590,
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,
        borderRadius: '25px'
    };

    // class names relect on mostly tail wind usage responsible for styling
    return (
        <div >
          
            <div className='ml-7 mt-4'>
            <Button sx={{color: primary}}  onClick={handleOpen}>ADD RESOURCE +</Button>
            </div>
            <div className='flex'>
           
            <div className='w-8/12 '>
          
            {
                resources.map(resource => {
                    if (filter === resource.tag) {
                        return (<ResourceItem key={resource.id} resource={resource} />)
                    } else if (filter === '') {
                        return (<ResourceItem key={resource.id} resource={resource} />)
                    }
                })
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddResource handleClose={handleClose} />
                </Box>
            </Modal>
            </div>
            <div className=' w-3/12 ml-4 shadow-2xl opacity-90 shadow-emerald-100  mt-3  flex-col items-center pb-10  p-4  mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400'>
            <center >
                
                <aside >
                    
                    <div >
                        <div className='mt-3 mb-3 font-bold'>Tags</div>

                        <div >
                            <button onClick={() => { setFilter('') }} className=' w-fit ml-4 shadow-2xl opacity-90 shadow-emerald-100  mt-3  flex-col items-center   p-4  mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400'>Show All</button>
                        </div>

                        {
                            resourcesTags.map(tag => {
                                return (
                                    <div key={tag.id} className='mb-4'>
                                        <button onClick={(e) => tagFilter(e)} className='w-fit ml-4 shadow-2xl opacity-90 shadow-emerald-100  mt-3  flex-col items-center   p-4  mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400'>{tag.tag}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </aside>
            </center>
            </div>
            </div>
        </div>
    )
}

export default ResourcesPage;