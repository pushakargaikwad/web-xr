import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import './About.css';

export function About() {
	return (
		<div className="about-page">
			<div className="about-container">
				<div className="about-header">
					<Link to="/" className="back-link">← Back to App</Link>
					<h1>About WebXR React Application</h1>
				</div>
				<section className="about-section">
					<h2>Free/Libre/Swatantra/Mukt Software</h2>
					<p>
						The WebXR React Application is Free/Libre Software, rooted in the principles of freedom and empowerment.
						In Indian philosophy, the term <strong>Swatantra</strong> (स्वतंत्र) signifies self-reliance and independence,
						while <strong>Mukt</strong> (मुक्त) represents liberation from restrictions. These ideals align closely with
						the concept of libre software, granting you key freedoms.
					</p>
				</section>

				<section className="about-section">
					<h2>Your Freedoms</h2>
					<ul>
						<li>Freedom to use the application for any purpose, including commercial use</li>
						<li>Freedom to study and modify the software to suit your needs</li>
						<li>Freedom to share the software with others</li>
						<li>Freedom to contribute improvements back to the community</li>
					</ul>
					<p>
						These freedoms are protected by the GNU Affero General Public License (AGPL), ensuring that the software
						and its users remain truly free.
					</p>
				</section>

				<section id="source-code" className="about-section">
					<h2>Source Code</h2>
					<p>
						As a libre software, our source code is openly available. You can explore how the VR/AR features are
						implemented, learn from the code, and contribute your own improvements. Find the complete source code on{' '}
						<a href="https://github.com/pushakargaikwad/web-xr" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>.
					</p>
				</section>

				<section className="about-section">
					<h2>License</h2>
					<p>
						This application is released under the GNU Affero General Public License v3.0 or later.
						This ensures that the software remains free/libre and that any network use of the software
						grants these freedoms to its users.
					</p>
				</section>

				<section className="about-section">
					<h2>Copyright</h2>
					<p>© 2025, Pushakar Gaikwad and contributors.</p>
				</section>

			</div>
			<Footer />
		</div>
	);
}