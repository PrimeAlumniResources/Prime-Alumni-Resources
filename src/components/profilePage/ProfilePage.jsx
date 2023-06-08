import Navigate from "react-router-dom"
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';


import { useState } from "react";

function ProfilePage() {

   const [username,setUserName] = useState('')
   const [bio,setBio] = useState('')
   const [tech,setTech] = useState('')
   const [socials,setSocials] = useState('')
   const [jobTitle,setJobTitle] = useState('')
   
    
   const addProfile = (e) => {
    event.preventDefault();

    dispatchEvent({
        type: 'SAGA/ADD_PROFILE',
        payload: ?????
    });

    setUserName('');
    setBio('');
    setTech('');
    setSocials('');
    setJobTitle('');
   }

    return (
        <div>

            {/*----------------SCREEN NAME----------------------  */}
            <div class=" mt-10 mb-2 ml-7">
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Screen Name</label>
                <input type="text" id="small-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            {/*----------------SCREEN NAME----------------------  */}

            {/*----------------COHORT NAME----------------------  */}
            <div class="mb-2 ml-7">
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cohort</label>
                <input type="text" id="small-input" class="block w-200 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" />
            </div>
            {/*----------------COHORT NAME----------------------  */}


            {/*----------------PRONOUNS----------------------  */}
            <div class=" mt-2 mb-2 ml-7">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pronouns</label>
                <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            {/*----------------PRONOUNS----------------------  */}


            {/*----------------CURRENT EMPLOYER AND DATES----------------------  */}
            <h3 className="ml-7">WORK</h3>
            <label for="default-input" class="block mb-2 ml-7 text-sm font-medium text-gray-900 dark:text-black">Current Employer</label>
            <div class="flex mb-2 ml-7">

                {/* -------------CURRENT EMPLOYER INPUT-------------- */}
                <input type="text" id="default-input" class=" mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {/* -------------CURRENT EMPLOYER INPUT-------------- */}


                {/* -------------DATE INPUT-------------- */}
                <div date-rangepicker class="flex items-center">

                    {/* -------------START DATE INPUT-------------- */}
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                    </div>
                    {/* -------------START DATE INPUT-------------- */}

                    <span class="mx-4 text-gray-500">
                        to
                    </span>

                    {/* -------------END DATE INPUT-------------- */}
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                    </div>
                    {/* -------------END DATE INPUT-------------- */}


                </div>
            </div>

            {/*----------------CURRENT EMPLOYER AND DATES----------------------  */}


            {   /*----------------LINKEDIN----------------------  */}
            <div class=" mt-1 mb-2 ml-7">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">LinkedIn</label>
                <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            {/*---------------- LINKEDIN----------------------  */}


            {/*----------------Portfolio----------------------  */}
            <div class="mb-2 ml-7">
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Portfolio</label>
                <input type="text" id="small-input" class="block w-200 h-10  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            {/*----------------Portfolio----------------------  */}


            {/*----------------TECH STACK----------------------  */}
            <h2 className="ml-7 mb-2">Tech Stack</h2>
            <div className="flex">



                <div class=" flex mb-6 ">

                    <div class="mb-6 ml-7">
                        <input type="text" id="small-input" class="block w-400 h-10  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div class="mb-6 ml-7">

                        <input type="text" id="small-input" class="block w-200 h-10  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                </div>

                <div>
                    <div class="-mt-8 ml-7">
                        <h2 className=" mb-2">Bio</h2>
                        <input type="text" id="small-input" class="block w-200 h-1/4 h-1/4 p-4 text-gray-900 border border-gray-100 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        
                        <div className="flex">
                        <div className="mt-4 inline-block">
                        <label for="small-input" class="block mb-2 mr:17 text-sm font-medium text-gray-900 dark:text-black">Facebook</label>
                        <input type="text" id="small-input" class="block w-200 h-10  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                           <div className="mt-4 inline-block">
                        <label for="small-input" class="block mb-2 ml-7 text-sm font-medium text-gray-900 dark:text-black">Twitter</label>
                            <input type="text" id="small-input" class="block ml-7 w-200 h-10  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div> 
                        </div>
                    </div>
                </div>



            </div>
            {/*----------------TECH STACK----------------------  */}


        </div>
    )
}

export default ProfilePage;