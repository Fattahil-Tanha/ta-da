import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from "react-icons/hi"


const getTopics = async () =>{
  try {
   const res =  await fetch('http://localhost:3000/api/topics', {cache: 'no-store'})
   if(!res.ok){
     throw new Error("Failed to Load Data")
   }
   return res.json();
  }
  catch (error) {
    console.log(error)
  }
}

export default async function TopicsList() {
  // const {topics} = await getTopics();

  return (
   <>
    <div className=''>
      <div className='border border-slate-600  sm:flex m-5 p-5 justify-between  rounded-xl' >
        <div className='lg:w-3/4'>
            <h2 className='font-semibold text-2xl my-4'>Topics</h2>
            <hr className='bg-slate-500 opacity-30' />
            <p className='text-sm my-3' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit harum magni quis, architecto voluptatibus cumque sunt sapiente voluptate voluptas. Inventore dolor aliquid provident maxime, velit vitae eum neque sint nemo.
            Doloremque reiciendis aut placeat. Pariatur officia saepe dignissimos et commodi explicabo, consequatur, deleniti adipisci exercitationem sapiente modi eum quod praesentium vel ipsa repellat ducimus ullam quibusdam aperiam eveniet tempora! Perferendis?</p>
        </div>
        <div className='mt-4 flex justify-center items-center gap-2'>
            <RemoveBtn></RemoveBtn>
            <Link href={'/editTopic/123'}>
                <HiPencilAlt size={32} color=''></HiPencilAlt>
            </Link>
        </div>
      </div>
    </div>
   </>
  )
}
