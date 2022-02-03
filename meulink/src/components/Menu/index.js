import './menu.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function Menu() {
    return (
        <div className='menu'>
            <a className='social' href="https://github.com/Melnatal">
                <BsGithub color='#68074b' size={24} />
            </a>
            <a className='social' href="https://www.linkedin.com/in/melina-schmitt-kremer-240902148/">
                <BsLinkedin color='#68074b' size={24} />

            </a>
            <Link className='menu-item' to='/links'>
                My Links
            </Link>
        </div>

    )
}