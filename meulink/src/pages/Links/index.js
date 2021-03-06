import { useState, useEffect } from 'react'
import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { getLinksSave, deleteLink } from '../../services/storeLinks'

import LinkItem from '../../components/LinkItem'



export default function Links() {
    const [myLinks, setMyLinks] = useState([]);

    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const [emptyList, setEmptyList] = useState(false);


    useEffect(() => {
        async function getLinks() {
            const result = await getLinksSave('@shortLink')
            if (result.length === 0) {
                setEmptyList(true);
            }
            setMyLinks(result);
        }
        getLinks();
    }, [])

    function handleOpenLink(Link) {
        setData(Link)
        setShowModal(true);
    }

    async function handleDelete(id) {
        const result = await deleteLink(myLinks, id);

        if (result.length === 0) {
            setEmptyList(true);
        }
        setMyLinks(result)
    }
    return (
        <div className="links-container">
            <div className="links-header">
                <Link to='/'>
                    <FiArrowLeft size={38} color='#68074b' />
                </Link>
                <h1>My Links</h1>

            </div>

            {emptyList && (
                <div className="links-item">
                    <h2 className='empty-list'>Your list is empty</h2>
                </div>
            )}
            {myLinks.map(Link => (


                <div key={Link.id} className="links-item">
                    <button className="link" onClick={() => handleOpenLink(Link)}>
                        <FiLink size={18} color='#68074b' />
                        {Link.long_url}
                    </button>
                    <button className="link-delete" onClick={() => handleDelete(Link.id)}>
                        <FiTrash size={24} color='#68074b' />
                    </button>
                </div>
            ))}

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}

        </div>
    )
}