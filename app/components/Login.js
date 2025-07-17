"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const Login = () => {
    const router = useRouter(); 
    const [formdata, setformData] = useState({
        username: "",
        password: ""
    });

    const handlechange = (event) => {
        event.preventDefault();
        setformData((currdata) => ({
            ...currdata,
            [event.target.name]: event.target.value
        }));
    };

    const handlesubmit = (e) => {
        e.preventDefault(); 
        localStorage.setItem("username", formdata.username);
        localStorage.setItem("password", formdata.password);

        
        router.push("/homes");
    };

    return (
        <div className="form">
            <form onSubmit={handlesubmit}>
                <h1>Login</h1>
                <label htmlFor="uname">
                    <input
                        type="text"
                        placeholder="username"
                        id="uname"
                        name="username"
                        value={formdata.username}
                        onChange={handlechange}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        name="password"
                        value={formdata.password}
                        onChange={handlechange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
