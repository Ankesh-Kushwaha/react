import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data,setdata]=useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/Ankesh-Kushwaha')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setdata(data);
      })
  },[])

  return (
    <>
      <div className=" ">
        <div className='p-2 m-3 border-0 rounded-lg bg-slate-800 text-center'>
          <img src={data.avatar_url} alt="" className=''/>
         </div>
        <div className='flex justify-center'>
          <div className="text-center m-4 bg-gray-600 teaxt-white p-4 text-3xl text-white">
            Github followers: {data.followers}
          </div>
          <div className="text-center  bg-gray-600 teaxt-white p-4 text-3xl m-3 text-white">
            Github following:{data.following}
          </div>
        </div>
      </div>
    </>
  );
}

export default Github