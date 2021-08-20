import Button from './Button'
import { useLocation } from 'react-router'

const Header = ({ text, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header>
            <h1>{text}</h1>
            {location.pathname ==='/' && (
                <Button 
                onClick={onAdd} 
                text={ showAdd ? 'Close':'Add'} 
                color={ showAdd ? 'red':'green'}
            />
            )}
            
            
        </header>
    )
}

export default Header