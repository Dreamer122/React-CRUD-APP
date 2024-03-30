import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
export const Editdata = () => {

    const navigate = useNavigate()
    let { uid, uname } = useParams();
    console.log(uid, uname);
    const [usereditdata, seteditdata] = useState({})
    let { name, username, email, website } = usereditdata



    const getApi = async () => {

        const useredit = await axios.get("http://localhost:5197/Userdata/" + uid)
        seteditdata(useredit.data)
    }
    useEffect(() => {
        getApi()
    }, [])


    const getuservalues = (e) => {
        usereditdata[e.target.name] = e.target.value
        seteditdata({ ...usereditdata })

    }

    const Submituservalue = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:5197/Userdata/" + uid, usereditdata)
        navigate("/")

    }


    return (
        <>
            <div className="login-container my-5">
                <form className="login-form" onSubmit={Submituservalue}>
                    <h2 className="mb-4">Edit User</h2>
                    <div className="input-group">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={getuservalues}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={getuservalues}

                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="mail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="mail"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={getuservalues}

                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="website" className="form-label">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            placeholder="Website"
                            value={website}
                            onChange={getuservalues}

                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="submit-btn ">Submit</button>

                    </div>

                </form>
            </div>

        </>
    )
}