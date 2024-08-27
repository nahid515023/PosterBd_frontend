import Main from '../component/Main'
import Navbar from '../component/Navbar'
import { chackLogin } from '../utils/ChackLogin'

function HomePage () {
  chackLogin()

  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default HomePage
