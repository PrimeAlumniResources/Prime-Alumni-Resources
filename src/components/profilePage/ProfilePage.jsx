
function ProfilePage() {

    return (
        <div>
            <div className="flex">
                <div>
                    <img className="w-64 h-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" srcset="" />
                </div>
                <div className="w-fit h-fit ml-5 mt-3">
                    <div className="flex"><h2>first name</h2> <h4>Pronouns</h4></div>
                </div>

                <div className=" w-fit h-fit flex -ml-36 mt-12">
                    <div className="inline">
                        <h3>username</h3> <br />
                        <h3>username</h3> <br />
                        <h3>username</h3> <br />
                        <h3>username</h3> <br />
                    </div>

                    <div className="inline">
                        <h3>usernameddd</h3> <br />
                        <h5>nameddd</h5>
                    </div>

                </div>
                <div className=" border-solid border-black w-fit  ml-24 h-fit justify-center mt-12 border-solid border-black">
                    <h3>Current Employer</h3>
                    <h3>Position</h3>
                    <h3>Start Date</h3>
                </div>
            </div>

            <div className="w-fit h-fit">

                <div class="mt-2 ml-3">
                    <h3 class="text-xl font-semibold">Bio</h3>
                    <p class="text-gray-600 mt-2">John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
                </div>
            </div>

            <div className="flex justify-center">
                <div>
                    current tech
                </div>

                <div className="ml-48">
                    known tech
                </div>
            </div>

        </div>
    )
}

export default ProfilePage;