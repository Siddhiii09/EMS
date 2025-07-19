const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', "")
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between text-white '>
      <div className='text-xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{props.data?.firstName || 'User'} 👋</span>
      </div>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-4 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}


export default Header