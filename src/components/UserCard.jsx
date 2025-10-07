import React from 'react'

const UserCard = ({user}) => {
    const {name , age , gender , about , PhotoUrl , skills} = user
    return (
        <div className='flex justify-center items-center h-screen my-10'>
            <div className="card bg-base-300 w-96 shadow-sm ">
                <figure>
                    <img
                        src={PhotoUrl}
                        alt="userphoto" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    {age && gender && <p>{age + ", " + gender}</p>}
                    <p>{about}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Ignore</button>
                        <button className="btn btn-secondary">Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
