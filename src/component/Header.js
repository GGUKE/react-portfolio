import { useEffect, useState } from "react";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function Header() {

	let [active, setActive]=useState(false);

	function toggleActive(e) {
		e.preventDefault();
		setActive(!active)
	}

	useEffect(() => {

		let gnbClick=document.querySelectorAll("#header .gnb_inner ul li");
		let sectionArr=document.querySelectorAll("section > div");

		
		gnbClick.forEach((item, i) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();

				if(i == 0){
					gsap.to(window, {
						scrollTo: 0, duration: 0.3
					})
				}
				else{
					gsap.to(window, {
						scrollTo: sectionArr[i-1], duration: 0.3
					})
				}
			});
		});
	})

	return (
		<header id="header">
			<div className="header_inner">
				<div className="logo"><a href="">[ front-end. ]</a></div>
				<div className={active ? "tab active" : "tab"} onClick={toggleActive}>
					<a href="">
						<span className="open"><i className="fa-solid fa-bars"></i></span>
						<span className="close"><i className="fa-solid fa-x"></i></span>
					</a>
					<div className="gnb_inner">
						<ul>
							<li><a href="/"><span>HOME</span></a></li>
							<li><a href="#page1"><span>ABOUT ME</span></a></li>
							<li><a href="#page2"><span>SKILL</span></a></li>
							<li><a href="#page3"><span>PROJECT</span></a></li>
							<li><a href="#page4"><span>OPEN SOURCE</span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;
