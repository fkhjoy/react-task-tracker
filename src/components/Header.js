import Button from './Button'

const Header = ({ text, onAdd, showAdd }) => {

    return (
        <header>
            <h1>{text}</h1>
            <Button onClick={onAdd} text={ showAdd ? 'Close':'Add'} color={ showAdd ? 'red':'green'}/>
        </header>
    )
}

export default Header