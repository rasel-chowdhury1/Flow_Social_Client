import Link from "next/link";
import { TbSocial } from "react-icons/tb";
import TextInput from "../ui/TextInput";
import CustomButton from "../ui/CustomButton";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    const theme = "dark";
    return (
        <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary'>
        <Link href='/' className='flex gap-2 items-center'>
          <div className='p-1 md:p-2 bg-[#065ad8] rounded text-white'>
            <TbSocial />
          </div>
          <span className='text-xl md:text-2xl text-[#065ad8] font-semibold'>
            ShareFun
          </span>
        </Link>
  
        <form
          className='hidden md:flex items-center justify-center'
        >
          <TextInput
            placeholder='Search...'
            styles='w-[18rem] lg:w-[38rem]  rounded-l-full py-3 '
          />
          <CustomButton
            title='Search'
            type='submit'
            containerStyles='bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full'
          />
        </form>
  
        {/* ICONS */}
        <div className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'>
          <button >
            {theme ? <BsMoon /> : <BsSunFill />}
          </button>
          <div className='hidden lg:flex'>
            <IoMdNotificationsOutline />
          </div>
  
          <div>
            <CustomButton
              title='Log Out'
              containerStyles='text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full'
            />
          </div>
        </div>
      </div>
    )
}

export default Navbar;