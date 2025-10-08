import React, { use } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constans'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice'

const Request = () => {
 const dispatch = useDispatch()
 const requests = useSelector((store) => store.request)
 const getRequest = async () => {
    try {
         const request = await axios.get(BASE_URL + "/user/requests/received" , {withCredentials : true})
         dispatch(addRequest(request.data.data))
    }catch(err) {
        return err.message
    }
} 

const reviewrequest = async(status , _id) => {
    try {
        const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id , {} , {withCredentials : true})
        dispatch(removeRequest(_id))
    }
    catch(err) {
        return err.message
    }
}

 useEffect(() => {
    getRequest()
 }, [])

   return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

      { requests && requests?.map((request) => {
        const { _id, name ,  photoUrl, age, gender, about } =
          request.fromUserid;

        return (
          <div
            key={_id}
            className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300  mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {name}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewrequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewrequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}



export default Request
