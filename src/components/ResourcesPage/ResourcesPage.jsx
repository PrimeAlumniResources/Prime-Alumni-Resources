import './ResourcesPage.css'
import AddResource from './AddResource';
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
            <h1>Welcome to your resources!</h1>
            <center>
            <aside className='aside'>
                <h1>TAGS</h1>
                <h2 onClick={() => {setFilter('')}}>Show All</h2>
                <ul>
                {
                    resourcesTags.map(tag => {
                        return (
                            <li key={tag.id} onClick={(e) => tagFilter(e)}>{tag.tag}</li>
                        )
                    })
                }
                </ul>
            </aside>
            </center>
            <Button onClick={handleOpen}>ADD +</Button>
            {   
                resources.map(resource => {
                    if(filter === resource.tag){
                         return (
                        <div className='resources' key={resource.id}>
                        <a href={resource.link} target='_blank'>
                        <h1>{resource.title}</h1>
                        <p>{resource.description}</p>
                        <p>Related to {resource.tag}</p>
                        </a>
                        </div>
                        )
                    }else if(filter === '') {
                        return (
                        <div className='resources' key={resource.id}>
                        <a href={resource.link} target='_blank'>
                        <h1>{resource.title}</h1>
                        <p>{resource.description}</p>
                        <p>Related to {resource.tag}</p>
                        </a>
                        </div>
                        )
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