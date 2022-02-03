import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="container-error">
            <img src="notfound.png" alt="page not found" />
            <h1>Page Not Found</h1>
            <Link to='/'>
                Back to home
            </Link>
        </div>

    )
}