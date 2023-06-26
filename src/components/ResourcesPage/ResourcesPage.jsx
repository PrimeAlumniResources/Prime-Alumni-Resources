import './ResourcesPage.css'
import AddResource from './AddResource';
import ResourceItem from './ResourceItem';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { teal, cyan } from '@mui/material/colors';
import './ResourcesPage.css';

function ResourcesPage() {
    const primary = teal['A200']; 
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'SAGA/GET_RESOURCE'
        });
        dispatch({
            type: 'SAGA/GET_RESOURCE_TAGS'
        });
    }, []);

    const resources = useSelector(store => store.resources);
    const resourcesTags = useSelector(store => store.resourceTags);

    const [filter, setFilter] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const tagFilter = (e) => {
        setFilter(e.target.innerHTML)
    }

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

    return (
        <div className='bg-gray-50 h-screen pt-5' >
          
            <div className='ml-7 mt-4'>
            <Button sx={{
              color: 'black',
              pb: '3px',
              pt: '3px',
              '&:hover': {
              bgcolor: 'grey.200', // Set the desired background color on hover
              },
            }}  
              onClick={handleOpen}>Add Resource +</Button>
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
            <div className='tag w-2/12 ml-4 shadow-2xl opacity-90 shadow-emerald-100 mt-3 border-solid border flex-col items-center pb-10 p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400'>
            <center >
                
                <aside >
                    
                    <div >
                        <div className='mt-3 mb-3 font-bold'>Tags</div>

                        <div >
                            <button onClick={() => { setFilter('') }} className=' w-fit border shadow-2xl opacity-90 shadow-emerald-100  mt-3  flex-col items-center pr-5 pl-5 text-green-800 rounded-full bg-green-50 dark:bg-white dark:text-green-400'>Show All</button>
                        </div>

                        {
                            resourcesTags.map(tag => {
                                return (
                                    <div key={tag.id} className='mb-4'>
                                        <button onClick={(e) => tagFilter(e)} className='w-fit ml-4 shadow-2xl opacity-90 shadow-emerald-100  mt-3  flex-col items-center p-4  mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400'>{tag.tag}</button>
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
};

export default ResourcesPage;