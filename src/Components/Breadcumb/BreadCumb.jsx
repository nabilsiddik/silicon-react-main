import React from 'react'
import './breadcumb.css'
import { useLoaderData, useLocation } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const BreadCumb = () => {

    const location = useLocation()

  return (
    <div id='breadcumb' className='flex items-center gap-5'>
      <span className='flex items-center gap-5'>
         <FaHome />
         Home
      </span>
      <span className='mt-5'><MdKeyboardDoubleArrowRight />
      </span>
      <span className='path_name'>{location.pathname.substring(1)}</span>
    </div>
  )
}

export default BreadCumb
