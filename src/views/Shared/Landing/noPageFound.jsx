import { Link } from 'react-router-dom';
import { LOGIN } from 'router/routes';

export default function NoPageFound() {
  return (
    <div>
      <h2>404</h2>
      <h3>No page found</h3>
      <div>
        <Link to={LOGIN}>Go to Log in</Link>
      </div>
    </div>
  );
}
