import { Link } from 'react-router-dom'

const CreateRoom = () => {
  return (
    <div>
      <h1>Create Room</h1>

      <Link className="underline" to="/room">
        Access Room
      </Link>
    </div>
  )
}

export default CreateRoom
