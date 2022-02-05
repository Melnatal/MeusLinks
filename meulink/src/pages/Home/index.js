import { useState } from 'react'
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';

import { saveLink } from '../../services/storeLinks'

export default function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            setShowModal(true);

            saveLink('@shortLink', response.data);

            setLink('')

        } catch {
            alert("ops something wrong!");
            setLink('');

        }

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
                <button onClick={handleShortLink}>Short Link</button>

            </div>
            <Menu />
            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data} />
            )}

        </div>

    )
}