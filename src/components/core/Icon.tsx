import Logo from '../../assets/images/icon.png'

export default function Icon() {
  return (
    <div className='flex items-center'>
        <img src={Logo} alt="app-icon" className='w-5 h-5'/>
        <h3 className="text-xl font-semibold pt-1 tracking-wide text-gray-300">
            Cafe
        </h3>
    </div>
  )
}
