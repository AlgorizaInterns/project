import profilePic from '../assets/images/profile.png'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <div>
        <p className='name'>John Doe</p>
        <p className='role'>admin</p>
      </div>
      <img src={profilePic} alt='John Doe avatar' />
    </div>
  )
}

export default Profile
