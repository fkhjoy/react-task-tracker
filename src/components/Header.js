import Button from './Button'

const Header = ({ text, }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header>
            <h1>{text}</h1>
            <Button onClick={onClick} text="Add"/>
        </header>
    )
}

export default Header