import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constans'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {addConnections} from "../utils/connectionsSlice"

const Connections = () => {
  const dispatch = useDispatch()
  const connections = useSelector((store) => store.connections)
  const getConnections = async () => {
    try {
        const connectiondata = await axios.get(BASE_URL + "/user/connections" , {withCredentials : true})
        dispatch(addConnections(connectiondata.data.data))
    } catch (err) {
        return err.message
    }
  }

  useEffect(()=> {
    getConnections()
  },[])

  if (!connections || connections.length === 0) {
    return (
      <div className="text-center my-10">
        <h1 className="text-bold text-white text-3xl">No Connections Found</h1>
      </div>
    );
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections?.map((connection) => {
        const { _id, name, photoUrl, about } =
          connection;

        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {name}
              </h2>
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Connections
