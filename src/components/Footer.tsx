import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
	return (
		<footer className="app-footer">
			<div className="footer-content">
				<div className="footer-left">
					<span>© 2025 Pushakar Gaikwad and contributors</span>
				</div>
				<div className="footer-right">
					<Link to="/about" className="about-link">About this Libre Software</Link>
				</div>
			</div>
		</footer>
	);
}
