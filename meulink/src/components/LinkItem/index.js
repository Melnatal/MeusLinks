import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi'
export default function LinkItem({ closeModal }) {
    return (
        <div className="modal-container">
            <div className="modal-header">
                <h2>Fast Link</h2>

                <button onClick={closeModal}>
                    <FiX size={28} color='#68074b' />

                </button>

            </div>
            <span>
                https://www.linkedin.com/in/melina-schmitt-kremer-240902148/
            </span>
            <button className="modal-link">
                https://github.com/Melnatal
                <FiClipboard size={20} color='#fff' />
            </button>

        </div>
    )
}