import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h3>Created by <a href='https://github.com/fkhjoy'>fkhjoy</a> </h3>
            <h4>Version 1.0.0</h4>
            <Link to='/'>Home</Link>
        </div>
    )
}


export default About