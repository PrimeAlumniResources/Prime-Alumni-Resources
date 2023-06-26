import Navigate from "react-router-dom"
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import { useDropzone } from "react-dropzone"
import AWS from 'aws-sdk';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TechCurrent from "../Tech/TechCurrent";
import TechKnown from "../Tech/TechKnown";

function editProfilePage() {

    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY
    const navigate = useNavigate();

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
        region: 'us-east-2'
    });

    {/* ------------------ALL THE CONST NEEDED FOR THIS PAGE--------------------- */ }

    const dispatch = useDispatch()
    const Dropzone = useDropzone()

    const [isTrue, SetTruth] = useState(false)
    const [currentStack, setCurrentStack] = useState([])

    const [knownStack, setKnownStack] = useState([])

    const [uploadedFile, setUploadedFile] = useState();

    const KnownStack = useSelector((store) => store.KnownStack)

    const currentStacks = useSelector((store) => store.currentStacks)

    const profile = useSelector(store => store.profile)

    console.log(profile)

    const cohort = useSelector(store => store.cohort);

    const campus = useSelector(store => store.campus);

    const user = useSelector((store) => store.user);

    const s3 = new AWS.S3();
    const [doneUpload, setDoneUpload] = useState('')
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    {/* --------------FUNCTION USED TO RETRIEVE FILE UPLOADED ON IMAGE INPUT--------------------- */ }

    const onDrop = (acceptedFiles) => {

        dispatch({
            type: 'RESET_PROFILE',
        })

        console.log('this is user.username', user.username);
        const params = {
            Bucket: 'profilepic3',
            Key: user.email,
            ContentType: 'image/jpeg', // Adjust the content type based on your image type
            Body: acceptedFiles[0] // 'file' is the File object obtained from an input element
        };

        s3.upload(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {

                setUploadedImageUrl(data.Location)
                console.log('Image uploaded successfully.', data.Location);

            }
            if (uploadedImageUrl!=""){
                refreshImage()
            } 

        });
      
    };

    {/* --------------------------USE EFFECTS FOR NECCESARY DATA--------------------- */ }
    const refreshImage = () => {
        dispatch({
            type: 'MODIFY_UPLOADED_FILE',
            payload: uploadedImageUrl
        })
        displayImage()
    }

    useEffect(() => {
        console.log('changed', uploadedImageUrl);
        dispatch({
            type: 'MODIFY_UPLOADED_FILE',
            payload: uploadedImageUrl
        })
       
    }, [uploadedImageUrl]);

  



    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE',
        })
    }, []);


    useEffect(() => {
        dispatch({
            type: 'FETCH_KNOWN_TECH',
        })
    }, []);

    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_TECH',
        })
    }, []);



    {/* --------------------------DISPLAY IMAGES CONDITIONAL RENDER--------------------- */ }

    const displayImage = (img) => {

        if (profile.uploaded_file != undefined) {
            return (
                <img className=" w-72 h-56   rounded-lg  hover:blur-none" src={profile.uploaded_file} alt="image description"></img>
            )
        } else {
            return (
                <label className="flex flex-col items-center justify-center w-full mt-20 h-10/12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-32 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input {...getInputProps()} id="dropzone-file" type="file" className="hidden" />
                </label>
            )
        }
    }



    {/* --------------------------HANDLE KEY FUNCTIONS FOR INPUTS--------------------- */ }

    const handleKeyPress = () => {
        if (event.key === 'Enter') {
            console.log('this is the current stack', currentStack);

            dispatch({
                type: 'UPDATE_CURRENT_TECH',
                payload: {
                    name: currentStack
                }
            })
            setCurrentStack('')

        }
    }

    const handleKnownKeyPress = () => {
        console.log('this is the known stack', knownStack);
        if (event.key === 'Enter') {

            dispatch({
                type: 'UPDATE_KNOWN_TECH',
                payload: {
                    name: knownStack
                }
            })

            setKnownStack('')
        }

    }

    const handleUsername = (event) => {
        dispatch({
            type: 'MODIFY_USERNAME',
            payload: event.target.value,
        })
        console.log('this is profile.userName', profile.username);
    }

    const handleFirstName = (event) => {
        dispatch({
            type: 'MODIFY_FIRST_NAME',
            payload: event.target.value,
        })
        console.log('this is profile.firstName', profile.firstName);
    }

    const handleLastName = (event) => {
        dispatch({
            type: 'MODIFY_LAST_NAME',
            payload: event.target.value,
        })
    }

    const handlePronouns = (event) => {
        dispatch({
            type: 'MODIFY_PRONOUNS',
            payload: event.target.value,
        })
    }

    const handleCohort = (event) => {
        dispatch({
            type: 'MODIFY_COHORT',
            payload: event.target.value,
        })
    }

    const handleCurrentWork = (event) => {
        dispatch({
            type: 'MODIFY_CURRENT_WORK',
            payload: event.target.value,
        })
    }

    const handleBio = (event) => {
        dispatch({
            type: 'MODIFY_BIO',
            payload: event.target.value,
        })
    }

    const handleUploadedFile = (event) => {
        dispatch({
            type: 'MODIFY_UPLOADED_FILE',
            payload: event.target.value,
        })
    }

    const handleLinkedIn = (event) => {
        dispatch({
            type: 'MODIFY_LINKED_IN',
            payload: event.target.value,
        })
    }

    const handleGithub = (event) => {
        dispatch({
            type: 'MODIFY_GITHUB',
            payload: event.target.value,
        })
    }

    const handlePortfolio = (event) => {
        dispatch({
            type: 'MODIFY_PORTFOLIO',
            payload: event.target.value,
        })
    }

    const handleStartDate = (event) => {
        dispatch({
            type: 'MODIFY_START_DATE',
            payload: event.target.value,
        })
    }

    const handlePosition = (event) => {
        dispatch({
            type: 'MODIFY_POSITION',
            payload: event.target.value,
        })
    }


    {/* ----------------------FUNCTION TO SEND DATA WHEN SUBMIT IS CLICKED--------------------- */ }

    const sendProfileInfo = () => {

        dispatch({
            type: 'PUT_PROFILE_INFO',
            payload: profile
        })

        navigate('/profile')
    }

    return (
       
           
                <div className="bg-gray-50 shadow-md shadow-emerald-100 text-base pt-10 sm:text-5 md:text-md lg:text-md " >
                    <div >
                        <div >
                            <div

                                target="_blank"
                                className="bg-white flex items-center justify-center h-fit ml-10 flex-col w-11/12 -mt-6   rounded-lg md:flex-row "
                            >
                                {/* <img
          className="object-cover ml-5 w-48 rounded-t-lg h-48  md:rounded-none md:rounded-l-lg max-w-4 sm:max-w-sm md:max-w-64 lg:max-w-64 xl:max-w-64 2xl:max-w-64"
          src={profile.uploaded_file}
          alt=""
        /> */}

                                <div class="shadow-2xl -ml-48 opacity-90 shadow-emerald-100  mt-10 flex flex-col items-center pb-5 flex p-4 mt-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400">

                                    <div {...getRootProps()} className=" -mt-2 mr-4">
                                        {displayImage()}
                                    </div>




                                </div>



                                {/* --------------------------------------CONTAINER FOR SOCIALS + USERNAME------------------------------ */}

                                <div className=" md:flex-row  justify-evenly w-fit h-fit flex ">

                                    {/* --------------------------------------CONTAINER FOR USER INFO------------------------------ */}

                                    <div className="ml-10  inline">
                                        <div className="flex">
                                            <div className="mb-2 ml-7 mt-2">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                                                <input
                                                    type="text"
                                                    id="small-input"
                                                    className="font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row "
                                                    value={profile.first_name}
                                                    placeholder={profile.first_name}
                                                    onChange={handleFirstName}
                                                />
                                            </div>
                                            <div className=" my-2 ml-7">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="default-input"
                                                    className="font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                                    value={profile.last_name}
                                                    onChange={handleLastName}
                                                    placeholder={profile.last_name}
                                                />
                                            </div>
                                        </div>


                                        <div className="h-fit flex">
                                            {/*----------------USER NAME----------------------  */}
                                            <div className="mt-2 mb-2 ml-7">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                                                <input
                                                    type="text"
                                                    id="small-input"
                                                    className="font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                                    value={profile.username}
                                                    onChange={handleUsername}
                                                    placeholder={profile.username}
                                                />
                                            </div>

                                            <div className=" mt-2 mb-2 ml-7">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pronouns</label>
                                                <input
                                                    type="text"
                                                    id="default-input"
                                                    className="font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                                    value={profile.pronouns}
                                                    onChange={handlePronouns}
                                                />
                                            </div>


                                        </div>
                                        {/* --------------------------------------CONTAINER FOR WORK INFO------------------------------ */}



                                        {/* --------------------------------------CONTAINER FOR COHORT INFO + PORTFOLIO------------------------------ */}


                                    </div>
                                </div>

                                {/*----------------USER NAME----------------------  */}

                                {/*----------------FIRST NAME----------------------  */}

                                {/*----------------FIRST NAME----------------------  */}


                                {/*----------------LAST NAME----------------------  */}

                                {/*----------------LAST NAME----------------------  */}

                            </div>
                        </div>

                        {/*----------------BIO----------------------  */}

                        {/*----------------BIO----------------------  */}

                        {/*----------------IMAGE----------------------  */}
                        {/* <img src={URL.createObjectURL(uploadedFile)} alt="" /> */}


                        {/*----------------IMAGE----------------------  */}

                    </div>

                    {   /*----------------PRONOUNS----------------------  */}
                    <div className="flex justify-evenly">
                        <div>
                            <div className=" mt-12 mb-2 ml-7">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Position</label>
                                <input
                                    type="text"
                                    id="default-input"
                                    className="font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                    value={profile.position}
                                    onChange={handlePosition}
                                />
                            </div>
                            {/*----------------PRONOUNS----------------------  */}


                          


                            {/* -------------POSITION INPUT-------------- */}
                            <div className="  mb-2">
                                <label className="block ml-7  mb-2 text-sm font-medium text-gray-900 dark:text-black">Workplace</label>
                                <input
                                    type="text"
                                    id="default-input"
                                    className="font-bold ml-7  text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                    value={profile.current_work}
                                    onChange={handleCurrentWork}
                                />
                            </div>
                            {/* -------------POSITION INPUT-------------- */}

                            {/* -------------START DATE INPUT-------------- */}
                            <div className=" mr-5 relative  date-rangepicke datepicker-format=mm/dd/yyyy ">

                                <label className=" ml-7   block mb-2 text-sm font-medium text-gray-900 dark:text-black">Start Date</label>



                                <input
                                    name="start"
                                    type="text"
                                    className="font-bold ml-7  text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row" placeholder="Select date start"
                                    value={profile.start_date}
                                    onChange={handleStartDate}
                                />
                            </div>
                            {/* -------------START DATE INPUT-------------- */}




                            {/*----------------SOCIAl STACK----------------------  */}

                            <label className="block mb-2 ml-7 text-sm font-medium text-gray-900 dark:text-black">LinkedIn</label>


                            <input
                                type="text"
                                id="default-input"
                                className="font-bold ml-7  text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                value={profile.linked_in}
                                onChange={handleLinkedIn}
                            />



                            {/* -------------GITHUB INPUT-------------- */}
                            <div className="  mb-2">
                                <label className="ml-7  block mb-2 text-sm font-medium text-gray-900 dark:text-black">GitHub Url</label>
                                <input
                                    type="text"
                                    id="default-input"
                                    className="font-bold ml-7  text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                    value={profile.github}
                                    onChange={handleGithub}
                                />
                            </div>
                            {/* -------------GITHUB INPUT-------------- */}

                            {/* -------------PORTFOLIO INPUT-------------- */}
                            <div className=" mr-5 relative">
                                <label className="block mb-2 ml-7  text-sm font-medium text-gray-900 dark:text-black">Portfolio Url</label>
                                <input
                                    type="text"
                                    id="default-input"
                                    className="font-bold ml-7  text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                    value={profile.portfolio_url}
                                    onChange={handlePortfolio}
                                />
                            </div>
                            {/* -------------PORTFOLIO INPUT-------------- */}

                        </div>

                        <div className="w-fit h-fit">

                            <label className="w-fit ml-7  h-50 block mt-11 mb-2 text-sm font-medium text-gray-900 ml-1">Bio</label>
                            <textarea
                                id="message"
                                rows="10" cols="80"
                                className=" w-fit h-300 ml-7  resize-none font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                value={profile.bio}
                                onChange={handleBio}
                                placeholder={profile.bio}
                            ></textarea>
                            .<div>
                                <div className="flex justify-center">
                                    <div className="mr-60 inline">
                                        <label className="ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Current Tech</label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className="font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                            value={currentStack}
                                            onChange={(event) => setCurrentStack(event.target.value)}
                                            onKeyPress={handleKeyPress}
                                        />
                                        {
                                            currentStacks?.map((stack) => {
                                                return (
                                                    <TechCurrent
                                                        stack={stack.name}
                                                    />
                                                )
                                            })
                                        }
                                    </div>

                                    <div className=" inline">
                                        <label className="ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Known Tech</label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            value={knownStack}
                                            className="font-bold text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row"
                                            onChange={(event) => setKnownStack(event.target.value)}
                                            onKeyPress={handleKnownKeyPress}
                                        />
                                        {
                                            KnownStack?.map((stack) => {
                                                console.log('this is stack', knownStack);
                                                return (
                                                    <TechKnown
                                                        stack={stack.name}
                                                    />
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                                {/* --------------------------SUBMIT BUTTON--------------------- */}

                                <div className=" flex justify-end mt-4">
                                    <button onClick={sendProfileInfo} className=" justify-end  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-600 rounded-lg group bg-gradient-to-br">
                                        <span className=" px-5 py-2.5 transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0">
                                            Submit
                                        </span>
                                    </button>
                                </div>

                                {/* --------------------------SUBMIT BUTTON--------------------- */}

                            </div>
                        </div>

                    </div>
                </div>
            




    )
}

export default editProfilePage;

