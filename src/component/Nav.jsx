import { BsLinkedin, BsSearch, BsFillGrid3X3GapFill } from 'react-icons/bs'
import { AiFillHome, AiOutlineMessage } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { MdWork } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'

function Nav () {

  return (
    <div className='bg-white w-full h-16 flex items-center text-sm text-gray-600 pl-6 justify-center'>
      <div className='flex items-center'>
        <BsLinkedin className='h-10 w-10 mr-6' color='#0966C2' />
        <div className='h-10 items-center bg-gray-100 pl-4 rounded hidden lg:inline-flex'>
          <BsSearch className='h-4 w-4' />
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent text-gray-300 w-72 pl-4 text-[16px] h-full'
          />
        </div>
      </div>

      <div className='flex w-[740px] space-x-3 md:space-x-5 lg:space-x-7 xl:space-x-9 2xl:space-x-11 justify-center'>
        <div className='flex-col items-center md:inline-flex lg:hidden'>
          <BsSearch className='h-[26px] w-[26px]' />
          <h3 className='hidden md:inline-flex'>Search</h3>
        </div>
        <div className='flex flex-col items-center'>
          <AiFillHome className='h-[26px] w-[26px]' />
          <h3 className='hidden md:inline-flex'>Home</h3>
        </div>
        <div className='flex flex-col items-center'>
          <FiUser className='h-[26px] w-[26px]' />
          <h3 className='hidden md:inline-flex'>My Network</h3>
        </div>
        <div className='flex flex-col items-center'>
          <MdWork className='h-[26px] w-[26px]' />
          <h3 className='hidden md:inline-flex'>Job</h3>
        </div>
        <div className='flex flex-col items-center'>
          <AiOutlineMessage className='h-[26px] w-[26px]' />
          <h3 className='hidden md:inline-flex'>Messaging</h3>
        </div>
        <div className='flex flex-col items-center'>
          <FaBell className='h-[26px] w-[26px]' />
          <h3 className='hidden md:inline-flex'>Notifications</h3>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src='https://i.pinimg.com/originals/86/90/14/869014ea87e157354d2326a5961b20e0.png'
            className='h-[26px] w-[26px] rounded-full'
          />
          <h3 className='hidden md:inline-flex'>Me</h3>
        </div>
        <div className='flex flex-col items-center'>
          <BsFillGrid3X3GapFill className='h-[26px] w-[26px]' />
          <h3 className='hidden md:inline-flex'>More</h3>
        </div>
      </div>
    </div>
  )
}

export default Nav
