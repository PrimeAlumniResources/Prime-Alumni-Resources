import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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

    <div className="text-base sm:text-5 md:text-md lg:text-md ">
      {/* --------------------------------------PROFILE IMAGE + FIRST & LAST CONTAINER----------------------------- */}

      <a
        href="#"
        target="_blank"
        className=" flex h-80 ml-2 flex-col items-center w-full rounded-lg shadow md:flex-row "
      >
        <img
          className="object-cover ml-5 w-48 rounded-t-lg h-48  md:rounded-none md:rounded-l-lg max-w-4 sm:max-w-sm md:max-w-64 lg:max-w-64 xl:max-w-64 2xl:max-w-64"
          src={profile.uploaded_file}
          alt=""
        />

        <div className="-mt-40 flex w-48 flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 ml-2 w-48  text-2xl font-bold tracking-tight text-gray-900 ">
            {profile.first_name} {profile.last_name}
          </h5>
        </div>

        {/* --------------------------------------CONTAINER FOR SOCIALS + USERNAME------------------------------ */}

        <div className=" md:flex-row  justify-evenly w-fit h-fit flex -ml-40 mt-16">
          <div className="inline">
            <label className="block mt-4 text-sm font-medium text-gray-900 dark:text-black">
              Username:
            </label>
            <h3>{profile.username}</h3> <br />
            <label className="-mt-6 block text-sm font-medium text-gray-900 dark:text-black">
              LinkedIn
            </label>
            <a
              target="_blank"
              href={profile.linked_in}
              className=" hover:underline"
            >
              {profile.linked_in}
            </a>
            <label className="block mt-2  text-sm font-medium text-gray-900 dark:text-black">
              Github:
            </label>
            <a
              target="_blank"
              href={profile.github}
              className="hover:underline"
            >
              {profile.github}
            </a>{" "}
            <br />
          </div>
          {/* --------------------------------------CONTAINER FOR WORK INFO------------------------------ */}

          <div className=" border-solid border-black  -mt-3 ml-6 border-solid border-black">
            <label className="block mt-6  text-sm font-medium text-gray-900 dark:text-black">
              Current Work:
            </label>
            <h3>{profile.current_work}</h3>
            <label className="block mt-1 text-sm font-medium text-gray-900 dark:text-black">
              Position:
            </label>
            <h3>{profile.position}</h3>
            <label className="block mt-2  text-sm font-medium text-gray-900 dark:text-black">
              Start Date:
            </label>
            <h3>{profile.start_date}</h3>
          </div>

          {/* --------------------------------------CONTAINER FOR COHORT INFO + PORTFOLIO------------------------------ */}

          <div className="ml-7 inline">
            <label className="block mt-2   text-sm font-medium text-gray-900 dark:text-black">
              Cohort:
            </label>
            <h3>{cohorts.name}</h3> <br />
            <label className="block -mt-4 text-sm font-medium text-gray-900 dark:text-black">
              Start Date:
            </label>
            <h5 className="mb-1">{cohorts.start_date}</h5>
            <label className="block  -mt-1 text-sm font-medium text-gray-900 dark:text-black">
              End Date:
            </label>
            <h5>{cohorts.end_date}</h5>
            <label className="block mt-2  text-sm font-medium text-gray-900 dark:text-black">
              Portfolio:
            </label>
            <a
              target="_blank"
              href={profile.portfolio_url}
              className=" hover:underline"
            >
              {profile.portfolio_url}
            </a>{" "}
            <br />
          </div>
        </div>
      </a>

      {/* --------------------------------------CONTAINER FOR PROFILE BIO------------------------------ */}

      <div className="text-center mt-2 -ml-32 w-screen">
        <div className="  text-center">
          <div>
            <h3 className="  text-xl font-semibold">Bio</h3>
          </div>
          <div>
            <p className=" text-gray-600 mt-2">{profile.bio}</p>
          </div>
        </div>
      </div>

      {/* --------------------------------------CONTAINER FOR ALL THE LANGUAGES------------------------------ */}

      <div className="flex justify-evenly">
        {/* --------------------------------------CODE FOR USERS CURRENT STACKS------------------------------ */}
        <div>
          <h2 className="block mt-2 underline font-medium text-gray-900 dark:text-black">
            Current Stack
          </h2>
          {currentStacks?.map((stack) => {
            return <h3>{stack.name}</h3>;
          })}
        </div>

        {/* --------------------------------------CODE FOR USERS KNOWN STACKS------------------------------ */}

        <div className="ml-48">
          <h2 className="block mt-2 underline font-medium text-gray-900 dark:text-black">
            Known Stack
          </h2>
          {KnownStack?.map((stack) => {
            return <h3>{stack.name}</h3>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
