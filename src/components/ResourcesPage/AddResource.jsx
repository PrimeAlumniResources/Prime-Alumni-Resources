import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function AddResource(props) {

    const resourcesTags = useSelector(store => store.resourceTags);

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const [tag, setTag] = useState('')
    const [newTag, setNewTag] = useState('')
    const dataPackage = {
        title: title,
        link: link,
        description: description,
        tag: tag,
        newTag: newTag
    }

    const handleChange = (event) => {
        setTag(event.target.value);
    };

    const saveResource = () => {
        dispatch({
            type: 'SAGA/ADD_RESOURCE',
            payload: dataPackage
        })
        props.handleClose()
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-white shadow shadow-emerald-400 shadow-lg bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-emerald-400 text-base font-semibold leading-6 text-gray-900" id="modal-title">Add Resource</h3>
                                    <div className="mt-2">

                                        <div className="col-span-full">
                                            <label htmlFor="username" className="text-emerald-400  block text-sm font-medium leading-6 ">Title</label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input
                                                        required
                                                        type="text"
                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-emerald-400  focus:ring-0 sm:text-sm sm:leading-6"
                                                       
                                                        value={title}
                                                        onChange={e => setTitle(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="username" className="text-emerald-400  block text-sm font-medium leading-6 ">Link</label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input
                                                        required
                                                        type="text"
                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-emerald-400  focus:ring-0 sm:text-sm sm:leading-6"
                                                      
                                                        value={link}
                                                        onChange={e => setLink(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="w-96 text-sm text-gray-500"> </p>

                                        <div className="col-span-full">
                                            <label htmlFor="about" className="text-emerald-400  block text-sm font-medium leading-6 ">Description</label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows="3"
                                                    className="block w-full rounded-md border-0 py-1.5 text-emerald-400 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    value={description}
                                                    onChange={e => setDescription(e.target.value)}
                                                >
                                                </textarea>
                                            </div>
                                        </div>



                                        <FormControl className="formControl" variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel className=" text-emerald-400"  id="tag">TAG</InputLabel>
                                            <Select
                                                labelId="tag"
                                                id="tag"
                                                value={tag}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {
                                                    resourcesTags.map(tag => {
                                                        return (
                                                            <MenuItem key={tag.id} value={tag.tag}>{tag.tag}</MenuItem>
                                                        )
                                                    })
                                                }
                                                <MenuItem value={'other'}>Other</MenuItem>

                                            </Select>
                                        </FormControl>
                                        {
                                            tag === 'other' &&
                                            <div className="col-span-full">
                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input
                                                        required
                                                        type="text"
                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        placeholder="Enter New Tag"
                                                        value={newTag}
                                                        onChange={e => setNewTag(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button onClick={saveResource} type="button" className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-emerald-300 shadow-md shadow-emerald-400  hover:bg-emerald-400 sm:ml-3 sm:w-auto">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddResource