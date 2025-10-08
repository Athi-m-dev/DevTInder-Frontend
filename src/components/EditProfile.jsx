import React, { use } from 'react'
import { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constans';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const EditProfile = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [about, setAbout] = useState(user.about);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [skills, setSkills] = useState(user.skills);
    const [PhotoUrl, setPhotoUrl] = useState(user.PhotoUrl);
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);

    const saveprofile = async () => {
        try {
            setError("");
            const skillsArray =
                typeof skills === "string"
                    ? skills.split(",").map((s) => s.trim()).filter(Boolean)
                    : skills;

            const profiledata = await axios.patch(BASE_URL + "/profile/edit", { name, about, PhotoUrl, age, gender, skills: skillsArray }, { withCredentials: true });
            dispatch(addUser(profiledata.data.data))
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);

        } catch (err) {
            setError(err?.response?.data?.message)
            return;
        }
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-start my-10 gap-10">
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input
                            type="text"
                            value={name}
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">About</span>
                        </div>
                        <textarea className="textarea w-full max-w-xs" value={about} placeholder="Bio" onChange={(e) => setAbout(e.target.value)}></textarea>
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">PhotoUrl</span>
                        </div>
                        <input
                            type="text"
                            value={PhotoUrl}
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Age</span>
                        </div>
                        <input
                            type="number"
                            value={age}
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Gender</span>
                        </div>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="select select-bordered w-full max-w-xs focus:outline-none"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Skills</span>
                        </div>
                        <input
                            type="text"
                            value={skills}
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </label>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center m-2">
                        <button onClick={saveprofile}
                            className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <UserCard user={{ 
            name, 
            about, 
            PhotoUrl, 
            age, 
            gender, 
            skills: typeof skills === "string"
                   ? skills.split(",").map((s) => s.trim()).filter(Boolean): skills,}} showAction={false} />

    {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}                                                               
        </div>
    )
}

export default EditProfile
