import React from 'react'

function YellowButton({type}) {
  return (
    <div className=' text-[#fca80f] font-semibold rounded-full w-fit bg-[#fca80f21] px-3 py-1 '>
        {type}
    </div>
  )
}

export default YellowButton