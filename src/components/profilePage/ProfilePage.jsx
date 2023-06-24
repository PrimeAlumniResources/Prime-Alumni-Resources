import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';

function ProfilePage() {
  {
    /* --------------------------USE SELECTOR DECLARATIONS------------------------------ */
  }
  
  const dispatch = useDispatch();

  const KnownStack = useSelector((store) => store.KnownStack);

  const currentStacks = useSelector((store) => store.currentStacks);

  const profile = useSelector((store) => store.profile);

  const cohorts = useSelector((store) => store.cohort);

  {
    /* --------------------------USE EFFECTS FOR ALL THE NECCESSARY DATA------------------------------ */
  }

  useEffect(() => {
    dispatch({
      type: "FETCH_MY_COHORT",
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "FETCH_PROFILE",
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "FETCH_KNOWN_TECH",
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "FETCH_CURRENT_TECH",
    });
  }, []);

  return (
    /* --------------------------------------PROFILE CONTAINER----------------------------- */

    <div className=" bg-gray-50 shadow-md shadow-emerald-100 text-base pt-10 sm:text-5 md:text-md lg:text-md ">
      {/* --------------------------------------PROFILE IMAGE + FIRST & LAST CONTAINER----------------------------- */}

      <div
       
        target="_blank"
        className="bg-white flex items-center justify-center h-fit ml-10 flex-col w-11/12 -mt-6   rounded-lg md:flex-row "
      >
        {/* <img
          className="object-cover ml-5 w-48 rounded-t-lg h-48  md:rounded-none md:rounded-l-lg max-w-4 sm:max-w-sm md:max-w-64 lg:max-w-64 xl:max-w-64 2xl:max-w-64"
          src={profile.uploaded_file}
          alt=""
        /> */}

        <div class="shadow-2xl opacity-90 shadow-emerald-100  mt-10 flex flex-col items-center pb-10 flex p-4 mt-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400">
          
            <img
              className=" mt-5 mr-5 w-24 h-24 mb-3 rounded-lg shadow-lg object-cover ml-5 w-48 h-48  max-w-4 sm:max-w-sm md:max-w-64 lg:max-w-64 xl:max-w-64 2xl:max-w-64"
              src={profile.uploaded_file}
              alt=""
            />
         
          <h2 class="ml-5 mt-1 font-bold text-2xl">{profile.first_name} {profile.last_name}</h2>
         

        </div>



        {/* --------------------------------------CONTAINER FOR SOCIALS + USERNAME------------------------------ */}

        <div className=" md:flex-row  justify-evenly w-fit h-fit flex ">

          {/* --------------------------------------CONTAINER FOR USER INFO------------------------------ */}

          <div className="ml-10  inline">
            <label className="block  text-sm font-medium text-gray-900 dark:text-black">
              Username:
            </label>
            <h3 className="font-bold  text-1xl  flex text-emerald-400 rounded-lg bg-white   flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row " >{profile.username}</h3> <br />
            <label className="-mt-2  block text-sm font-medium text-gray-900 dark:text-black">
              LinkedIn
            </label>
            <a
              target="_blank"
              href={profile.linked_in}
              className=" text-1xl font-bold  flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row  "
            >
              {profile.linked_in}
            </a>
            <label className="block mt-4 font-bold   text-sm font-medium text-gray-900 dark:text-black">
              Github:
            </label>
            <a
              target="_blank"
              href={profile.github}
              className=" text-1xl flex font-bold text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row "
            >
              {profile.github}
            </a>{" "}
            <br />
          </div>
          {/* --------------------------------------CONTAINER FOR WORK INFO------------------------------ */}

          <div className=" border-solid border-black  -mt-3 ml-6 border-solid border-black">
            <label className="block mt-3 text-sm font-medium text-gray-900 dark:text-black">
              Current Work:
            </label>
            <h3 className=" text-1xl font-bold  flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row ">{profile.current_work}</h3>
            <label className="block  mt-4 text-sm font-medium text-gray-900 dark:text-black">
              Position:
            </label>
            <h3 className=" text-1xl font-bold  flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row ">{profile.position}</h3>
            <label className="block mt-4 text-sm font-medium text-gray-900 dark:text-black">
              Start Date:
            </label>
            <h3 className="font-bold  text-1xl flex text-emerald-400 rounded-lg bg-white  flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row  ">{moment(profile.start_date).format('MMMM Do, YYYY')}</h3>
          </div>

          {/* --------------------------------------CONTAINER FOR COHORT INFO + PORTFOLIO------------------------------ */}

          <div className=" ml-5 inline">
            <label className="block text-sm font-medium text-gray-900 dark:text-black">
              Cohort:
            </label>
            <h3 className="font-bold  text-1xl flex text-emerald-400 rounded-lg bg-white shadow-sm shadow-emerald-100 flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row " >{cohorts.name}</h3> <br />
            <label className="block -mt-2 text-sm font-medium text-gray-900 dark:text-black">
              Cohort Start Date:
            </label>
            <h5 className="font-bold  text-1xl flex text-emerald-400 rounded-lg bg-white shadow-sm shadow-emerald-100 flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row  ">{moment(cohorts.start_date).format('MMMM Do, YYYY')}</h5>
            <label className="block  mt-4 text-sm font-medium text-gray-900 dark:text-black">
              Cohort End Date:
            </label>
            <h5 className="font-bold  text-1xl flex text-emerald-400 rounded-lg bg-white shadow-sm shadow-emerald-100 flex items-center justify-center h-fit  flex-col w-fit p-2 rounded-lg shadow md:flex-row ">{moment(cohorts.end_date).format('MMMM Do, YYYY')}</h5>

            <br />
          </div>
        </div>
      </div>

      {/* --------------------------------------CONTAINER FOR PROFILE BIO------------------------------ */}
      <h3 className="mt-3 ml-20 text-left mb-1 text-emerald-400 text-xl ">Biography</h3>
      
      <div className=" ml-20 bg-white shadow-2xl shadow-emerald-100 flex items-center justify-center h-fit  flex-col w-10/12 rounded-lg shadow md:flex-row flex text-emerald-500 rounded-lg  flex items-center justify-center h-fit  flex-col  p-2 rounded-lg shadow md:flex-row ">
        
          <div>
            <p className="text-center  mt-2 p-2">{profile.bio}</p>
          </div>
        
      </div>

      {/* --------------------------------------CONTAINER FOR ALL THE LANGUAGES------------------------------ */}
     
      <div className="flex justify-evenly">
        {/* --------------------------------------CODE FOR USERS CURRENT STACKS------------------------------ */}
        
        <div>
          <h2 className="font-bold text-emerald-400 bg-white shadow-lg shadow-emerald-100 flex items-center justify-center h-fit  flex-col w-fit p-2 pl-10 pr-10  rounded-lg shadow md:flex-row mt-4">
            Current Stack
          </h2>
          {currentStacks?.map((stack) => {
            return <div className="flex text-center text-emerald-600 item-center justify-center  pt-1 pb-1 mt-4 mb-4 w-36 ml-4   rounded-lg bg-white shadow-sm shadow-emerald-100 dark:text-emerald-600" role="alert">
              
                {/* --------------------CURRENT LANGUAGES NAME--------------------- */}

                <div className="ml-3 text-emerald-400  text-sm font-medium">
                  {stack.name} <a href="#" className="font-semibold underline hover:no-underline"></a>
                </div>

              </div>
            ;
          })}
        </div>

        {/* --------------------------------------CODE FOR USERS KNOWN STACKS------------------------------ */}

        <div>
          <h2 className="font-bold text-emerald-400 bg-white shadow-lg shadow-emerald-100 flex items-center justify-center h-fit  flex-col w-fit p-2 pl-10 pr-10  rounded-lg shadow md:flex-row mt-4">
            Known Stack
          </h2>
          {KnownStack?.map((stack) => {
            return <div className="flex text-center item-center justify-center  pt-1 pb-1 mt-4 mb-4 w-36 ml-4  text-green-800 rounded-lg bg-white shadow-lg shadow-emerald-100 text-emerald-600" role="alert">
              
                {/* --------------------CURRENT LANGUAGES NAME--------------------- */}

                <div className="ml-3 text-emerald-400  text-sm font-medium">
                  {stack.name} <a href="#" className="font-semibold underline hover:no-underline"></a>
                </div>

              </div>
            ;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
