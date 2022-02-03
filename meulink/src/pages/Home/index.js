import { FiLink } from 'react-icons/fi';
import './home.css'

import Menu from '../../components/Menu'
export default function Home() {
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
                    />

                </div>
                <button>Link Fast</button>

            </div>
            <Menu />
        </div>


    )
}