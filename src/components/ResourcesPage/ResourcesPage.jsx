import './ResourcesPage.css'
import AddResource from './AddResource';
import ResourceItem from './ResourceItem';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';

function ResourcesPage() {

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
        <div>

            <center>
                <h1>Welcome to all resources!</h1>
                <aside className='aside'>
                    
                    <div className='tag-container fixed'>
                        <div className='mt-3 mb-3 font-bold'>Tags</div>

                        <div className='mb-4'>
                            <button onClick={() => { setFilter('') }} className='filter-options'>Show All</button>
                        </div>

                        {
                            resourcesTags.map(tag => {
                                return (
                                    <div key={tag.id} className='mb-4'>
                                        <button onClick={(e) => tagFilter(e)} className='filter-options'>{tag.tag}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </aside>
            </center>
            <Button onClick={handleOpen}>ADD RESOURCE +</Button>
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
    )
}

export default ResourcesPage;