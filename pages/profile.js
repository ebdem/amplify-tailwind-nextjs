import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";


function Profile(){
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        checkUser()
    }, [])

    async function checkUser(){
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
    }

    if (!user) return null;

    return(
        <div>
            <h1 className="text-3x1 font-semibold tracking-wid"> Profile</h1>
            <h3 className=" font-medium text-gray-500 my-2">UserName :{user.username}</h3>
            <p className="text-sm text-gray-500 mb-6">Email: {user.attributes.email}</p>
            <AmplifySignOut/>
        </div>
    )
    

}

export default withAuthenticator(Profile);