import Navigate from "react-router-dom"
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import { useDropzone } from "react-dropzone"

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useState } from "react";

function ProfilePage() {
    const dispatch= useDispatch()
    const Dropzone = useDropzone()
    const [username, setUserName] = useState('')
    const [bio, setBio] = useState('')
    const [tech, setTech] = useState('')
    const [socials, setSocials] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [file, setSelectedFile] = useState()
    const [isTrue, SetTruth] = useState(false)
    const [currentStack,setCurrentStack] = useState([])
    const [uploadedFile, setUploadedFile] = useState();

    const currentStacks= useSelector((store) => store.currentStacks)

    console.log('this is current stacks',currentStacks);

    const onDrop = (acceptedFiles) => {
        // Set the first accepted file as the uploaded file
        setUploadedFile(acceptedFiles[0]);
        SetTruth(true)
        setTrue()
    };
    console.log('file--->', uploadedFile);

    const addProfile = (e) => {
        event.preventDefault();

        // dispatchEvent({
        //     type: 'SAGA/ADD_PROFILE',
        //     payload: ?????
        // });

        setUserName('');
        setBio('');
        setTech('');
        setSocials('');
        setJobTitle('');
    }

    const setTrue = () => {

        displayImage()
    }

    const displayImage = () => {

        if (isTrue === true && uploadedFile != undefined) {
            return (
                <img className=" w-72 h-56 mt-20  rounded-lg  hover:blur-none" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"></img>
            )
        } else {
            return (
                <label  className="flex flex-col items-center justify-center w-full mt-20 h-10/12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-32 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input onClick={setTrue} {...getInputProps()} id="dropzone-file" type="file" className="hidden" />
                </label>
            )
        }
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    
    const handleKeyPress = () => {
        if ( event.key==='Enter') {
            console.log('this is the current stack',currentStack);
            
            dispatch({
                type: 'SET_CURRENT_STACK',
                payload: currentStack
            })
            setCurrentStack('')
        }
    }
    return (
        <div className=" h-screen">
            <div className="h-full  ">
                <div className=" h-4/5 overflow-auto" >
                    <div className=" h-72 flex justify-between ">
                        <div className="h-fit">
                            {/*----------------USER NAME----------------------  */}
                            <div className=" mt-10 mb-2 ml-7">
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                                <input type="text" id="small-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {/*----------------USER NAME----------------------  */}

                            {/*----------------FIRST NAME----------------------  */}
                            <div className="mb-2 ml-7">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                                <input type="text" id="small-input" className="block w-200 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" />
                            </div>
                            {/*----------------FIRST NAME----------------------  */}


                            {/*----------------LAST NAME----------------------  */}
                            <div className=" mt-2  ml-7">
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {/*----------------LAST NAME----------------------  */}

                        </div>

                        {/*----------------BIO----------------------  */}
                        <div className="w-fit h-fit">

                            <label className="w-fit h-50 block mt-11 mb-2 text-sm font-medium text-gray-900 ml-1">Bio</label>
                            <textarea id="message" rows="10" cols="30" className=" w-fit h-300 resize-none block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bio"></textarea>
                            .
                        </div>
                        {/*----------------BIO----------------------  */}

                        {/*----------------IMAGE----------------------  */}
                        {/* <img src={URL.createObjectURL(uploadedFile)} alt="" /> */}
                        <div {...getRootProps()} className=" -mt-2 mr-4">
                            {displayImage()}
                            {/* <label for="dropzone-file" class="flex flex-col items-center justify-center w-full mt-20 h-10/12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" class="w-10 h-32 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input onClick={setTrue} {...getInputProps()}   id="dropzone-file" type="file" class="hidden" />
                    </label> */}

                        </div>

                        {/*----------------IMAGE----------------------  */}

                    </div>

                    {   /*----------------PRONOUNS----------------------  */}
                    <div className=" -mt- mb-2 ml-7">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pronouns</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/*----------------PRONOUNS----------------------  */}


                    {/*----------------COHORT----------------------  */}
                    <div className="mb-2 ml-7">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cohort</label>
                        <input type="text" id="small-input" className="block w-200 h-10  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/*----------------COHORT----------------------  */}


                    {/*----------------CURRENT EMPLOYER AND DATES----------------------  */}
                    <label  className="block mb-2 ml-7 text-sm font-medium text-gray-900 dark:text-black">Current Employer</label>
                    <div className="flex justify-between mb-2 ">

                        {/* -------------CURRENT EMPLOYER INPUT-------------- */}
                        <input type="text" id="default-input" className=" ml-7  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 h-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* -------------CURRENT EMPLOYER INPUT-------------- */}


                        {/* -------------POSITION INPUT-------------- */}
                        <div className=" -mt-7 mb-2">
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Position</label>
                            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        {/* -------------POSITION INPUT-------------- */}

                        {/* -------------START DATE INPUT-------------- */}
                        <div className="-mt-8 mr-5 relative">
                            <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <label  className="mr-2 -ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Start Date</label>
                                {/* <svg aria-hidden="true" class=" mb-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
                            </div>
                            <input name="start" type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                        </div>
                        {/* -------------START DATE INPUT-------------- */}

                    </div>




                    {/*----------------TECH STACK----------------------  */}

                    <label  className="block mb-2 ml-7 text-sm font-medium text-gray-900 dark:text-black">LinkedIn</label>
                    <div className="flex justify-between mb-2 ">

                        <input type="text" id="default-input" className=" ml-7  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 h-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />



                        {/* -------------GITHUB INPUT-------------- */}
                        <div className=" -mt-7 mb-2">
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">GitHub Url</label>
                            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        {/* -------------GITHUB INPUT-------------- */}

                        {/* -------------PORTFOLIO INPUT-------------- */}
                        <div className="-mt-8 mr-5 relative">
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Portfolio Url</label>
                            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        {/* -------------PORTFOLIO INPUT-------------- */}

                    </div>
                    {/*----------------TECH STACK----------------------  */}

                    <div>
                        <div className="flex justify-center">
                            <div className="mr-60 inline">
                                <label  className="ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Current Stack</label>
                                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div className=" inline">
                                <label  className="ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Known Stack</label>
                                <input 
                                type="text" 
                                id="default-input" 
                                value={currentStack}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                onChange={(event) => setCurrentStack(event.target.value)}
                                onKeyPress={handleKeyPress}
                                />
                                {
                                    currentStacks?.map(stack => {
                                      return (
                                        <p>{stack}</p>
                                      )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfilePage;