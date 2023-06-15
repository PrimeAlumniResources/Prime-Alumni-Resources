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
    }, []);

    const resources = useSelector(store => store.resources);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 550,
        height: 550,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <h1>Welcome to your resources!</h1>
            <center>
            <aside className='aside'>
                <h1>TAGS</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                </ul>
            </aside>
            </center>
            <Button onClick={handleOpen}>ADD +</Button>
            {
                resources.map(resource => {
                    return (
                        <div className='resources' key={resource.id}>
                        <h1>Title: {resource.title}</h1>
                        <h2>Link: {resource.link} Tag: {resource.tag}</h2>
                        <p>Description: {resource.description}</p>
                        </div>
                    )
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