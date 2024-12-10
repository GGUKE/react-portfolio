import './css/main.css'
import Aboutme from './component/Aboutme';
import Header from './component/Header';
import Mainpage from './component/Mainpage';
import Skills from './component/Skills';
import Project from './component/Project';
import Opensource from './component/Opensource';
import Footer from './component/Footer';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';


function App() {
	useEffect(() => {
		const lenis=new Lenis({
			duration: 2,
			easing: (t) => Math.min(1, 1.001-Math.pow(2, -10*t))
		});
	  
		function raf(time){
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
	  
		requestAnimationFrame(raf);
	},[]);
	return (
		<>
			<div className="wrapper">
				<Header />
				<Mainpage />
			</div>
			<section>
				<Aboutme />
				<Skills />
				<Project />
				<Opensource />
			</section>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
