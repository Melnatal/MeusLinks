import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Links() {
    return (
        <div className="links-container">
            <div className="links-header">
                <Link to='/'>
                    <FiArrowLeft size={38} color='#68074b' />
                </Link>
                <h1>My Links</h1>

            </div>
            <div className="links-item">
                <button className="link">
                    <FiLink size={18} color='#68074b' />
                    https://github.com/Melnatal



                </button>
                <button className="link-delete">
                    <FiTrash size={24} color='#68074b' />
                </button>
            </div>
            <div className="links-item">
                <button className="link">
                    <FiLink size={18} color='#68074b' />
                    https://www.linkedin.com/in/melina-schmitt-kremer-240902148/


                </button>
                <button className="link-delete">
                    <FiTrash size={24} color='#68074b' />
                </button>
            </div>
        </div>
    )
}