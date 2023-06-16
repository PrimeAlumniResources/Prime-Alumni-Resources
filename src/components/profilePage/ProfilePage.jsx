
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ProfilePage() {

    const dispatch = useDispatch()


    const KnownStack = useSelector((store) => store.KnownStack)

    const currentStacks = useSelector((store) => store.currentStacks)

    const profile = useSelector(store => store.profile)

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

    return (
        <div>

            <a href="#" class="flex h-64 ml-2 flex-col items-center w-full rounded-lg shadow md:flex-row    ">
                <img class="object-cover  ml-5 w-48 rounded-t-lg h-48  md:rounded-none md:rounded-l-lg" src={profile.uploaded_file} alt="" />

                <div class="-mt-40 flex w-48 flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 ml-2 w-48  text-2xl font-bold tracking-tight text-gray-900 ">{profile.first_name} {profile.last_name}</h5>

                </div>

                <div className=" md:flex-row  justify-evenly w-fit h-fit flex -ml-40 mt-16">
                    <div className="inline">
                        <label className="block text-sm font-medium text-gray-900 dark:text-black">Username:</label>
                        <h3>{profile.username}</h3> <br />
                        <label className="-mt-4 block text-sm font-medium text-gray-900 dark:text-black">LinkedIn</label>
                        <h3>{profile.linked_in}</h3> <br />
                        <label className="block -mt-4  text-sm font-medium text-gray-900 dark:text-black">Github:</label>
                        <h3>{profile.github}</h3> <br />
                    </div>

                    <div className="ml-7 inline">
                        <label className="block   text-sm font-medium text-gray-900 dark:text-black">Cohort:</label>
                        <h3>cohort</h3> <br />
                        <label className="block -mt-4 text-sm font-medium text-gray-900 dark:text-black">Start Date:</label>
                        <h5>Cohort date</h5>
                        <label className="block mt-2  text-sm font-medium text-gray-900 dark:text-black">Portfolio:</label>
                        <h3>{profile.portfolio_url}</h3> <br />
                    </div>

                    <div className=" border-solid border-black  -mt-3 ml-6 border-solid border-black">
                    <label className="block mt-2  text-sm font-medium text-gray-900 dark:text-black">Current Work:</label>
                        <h3>{profile.current_work}</h3>
                        <label className="block mt-3  text-sm font-medium text-gray-900 dark:text-black">Position:</label>
                        <h3>{profile.position}</h3>
                        <label className="block mt-2  text-sm font-medium text-gray-900 dark:text-black">Start Date:</label>
                        <h3>{profile.start_date}</h3>
                    </div>
                </div>
            </a>
          

            <div className="text-center mt-2 -ml-32 w-screen">

                <div className="  text-center">
                    <div>
                    <h3 class="  text-xl font-semibold">Bio</h3>
                    </div>
                 <div>
                 <p class=" text-gray-600 mt-2">{profile.bio}</p>
                 </div>
                   
                </div>
            </div>

            <div className="flex justify-evenly">
                <div>
                <h2 className="block mt-2 underline font-medium text-gray-900 dark:text-black">Current Stack</h2>
                    {
                        currentStacks?.map(stack => {

                            return (
                                <h3>{stack.name}</h3>
                            )
                        })
                    }
                </div>

                <div className="ml-48">
                <h2 className="block mt-2 underline font-medium text-gray-900 dark:text-black">Known Stack</h2>
                    {
                        KnownStack?.map(stack => {

                            return (
                                <h3>{stack.name}</h3>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default ProfilePage;


{/* <div className="flex mt-5 justify-center"> */}
{/* <div className="-ml-40">
    <img className=" w-64 h-72" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" srcset="" />
</div> */}
{/* <div className="w-fit h-fit ml-5 mt-3">
    <div className="flex"><h2>{profile.first_name} {profile.last_name}</h2> <h4 className="ml-5">{profile.pronouns}</h4></div>
</div> */}

{/* <div className=" w-fit h-fit flex -ml-36 mt-12"> */}
    {/* <div className="inline">
        <h3>{profile.username}</h3> <br />
        <h3>{profile.linked_in}</h3> <br />
        <h3>{profile.github}</h3> <br />
        <h3>{profile.portolio_url}</h3> <br />
    </div> */}

    {/* <div className="ml-7 inline">
        <h3>cohort</h3> <br />
        <h5>Cohort date</h5>
    </div> */}

{/* </div> */}
{/* <div className=" border-solid border-black w-fit  ml-24 h-fit justify-center mt-12 border-solid border-black">
    <h3>{profile.current_work}</h3>
    <h3>{profile.position}</h3>
    <h3>{profile.start_date}</h3>
</div> */}
{/* </div> */}