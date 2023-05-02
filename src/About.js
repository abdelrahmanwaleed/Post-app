import { Link } from "react-router-dom"
const About = () => {
    return (
      <main className="About">
          <h1>About</h1>
          <p style={{marginTop: "1rem"}}>This blog app is a project in the Learn React</p>
          <Link to ="/">Return to Homepage</Link>
      </main>
    )
  }
  
  export default About