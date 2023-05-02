import { Link } from "react-router-dom"

const Missing = () => {
    return (
      <main className='Missing'>
        <h2>Post is not found</h2>
        <p>sorry for that or retype it well</p>
        <p>
            <Link to='/'>Return to homepage </Link>
        </p>
          
      </main>
    )
  }
  
  export default Missing