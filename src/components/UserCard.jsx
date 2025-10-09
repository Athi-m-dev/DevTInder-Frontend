import axios from 'axios'
import React, { use } from 'react'
import { BASE_URL } from '../utils/constans'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utils/feedSlice'

const UserCard = ({ user, showAction = true }) => {
    const { name, age, gender, about, PhotoUrl, skills , _id} = user
    const dispatch = useDispatch();

    const handleAction = async (status , _id) => {
        await axios.post(BASE_URL + "/request/send/" + status + "/" + _id , {}, { withCredentials: true });
        dispatch(removeUserFromFeed(_id))
    }

    if (!user)  return;
    if (user.length === 0) return <h1 className='text-bold text-white text-3xl'>No Users Found</h1>
    return (
        <div >
            <div className="card bg-base-300 w-96 shadow-sm ">
                <figure>
                    <img
                        src={PhotoUrl}
                        alt="userphoto" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        {age} {age && gender ? ", " : ""}{gender}
                    </p>
                    <p>{about}</p>
                    {skills.length > 0 && (
                        <div>
                            <h3 className="font-semibold mt-2 mb-1">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="badge badge-outline text-sm px-3 py-1"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                  { showAction && ( <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleAction("ignored" , _id)}>Ignore</button>
                        <button className="btn btn-secondary" onClick={() => handleAction("interested" , _id)}>Interested</button>
                    </div>
                   )}
                </div>
            </div>
        </div>
    )
}

export default UserCard
