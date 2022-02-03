import { useState } from 'react'
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem';

export default function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    function handleShortLink() {
        setShowModal(true);
    }
    return (
        <div className="container-home">

            <div className="logo">
                <img src='./logo.png' alt='' />
                <h1>Melina's Link</h1>
                <span>Put your link here to facility... </span>
            </div>


            <div className="area-input">
                <div>
                    <FiLink size={50} color="#68074b" />
                    <input
                        placeholder="Put your link here..."
                        value={link}
                        onChange={(event) => setLink(event.target.value)}
                    />

                </div>
                <button onClick={handleShortLink}>Link Fast</button>

            </div>
            <Menu />
            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)} />
            )}

        </div>

    )
}