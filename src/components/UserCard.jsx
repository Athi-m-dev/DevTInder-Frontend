import React from 'react'

const UserCard = ({ user, showAction = true }) => {
    const { name, age, gender, about, PhotoUrl, skills } = user
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
                        <button className="btn btn-primary">Ignore</button>
                        <button className="btn btn-secondary">Interested</button>
                    </div>
                   )}
                </div>
            </div>
        </div>
    )
}

export default UserCard
