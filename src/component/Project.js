import { useEffect } from "react"
import data from "./data";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Project() {

	let projectData=data.project;

	useEffect(() => {

		const page3Tl=gsap.timeline({
			scrollTrigger: {
				trigger: "#page3",
				start: "top center",
				end: "+=3000",
				// markers: true,
			}
		});
		
		page3Tl.fromTo("#page3 .title", {
			opacity: 0.1
		},{
			opacity: 1, duration: 0.5
		});
		
		page3Tl.fromTo("#page3 .info", {
			x: -50, opacity: 0
		},{
			x: 0, opacity: 1, duration: 0.3, stagger: 0.1
		});
		
		let page3inner=document.querySelectorAll("#page3 .inner .info");

		page3inner[0].classList.add("active");

		gsap.fromTo(page3inner[0].lastElementChild, { display: "block", height: 0 }, { height: "auto", duration: 0.3 });
		
		page3inner.forEach(function(item1, i){
			item1.addEventListener("click", function(e){
				e.preventDefault();

				if(e.target === e.currentTarget.querySelector(".link")){
					window.open(e.currentTarget.querySelector(".link").getAttribute("href"), "portfolio");
		
				 	return;
				}
		
				if(item1.classList.contains("active") == false){
					page3inner.forEach(function(item2, j){
						if(j == i){
							item2.classList.add("active");
							gsap.fromTo(item2.lastElementChild, {
								display: "block", height: 0
							},
							{
								height: "auto", duration: 0.3
							});
						}
						else{
							item2.classList.remove("active");
							gsap.to(item2.lastElementChild, {
								height: 0, display: "none", duration: 0.3
							});
						}
					});
				}
				else{
					item1.classList.remove("active");
		
					gsap.to(item1.lastElementChild, {
						height: 0, display: "none", duration: 0.3
					});
				}
			});
		});
	
	});

	

	return (
		<div id="page3">
			<div className="title serif">Project</div>
			<div className="inner">
				{
					projectData.map((d, i) =>
						<div className="info" key={i}>
							<a href="">{d.name}</a>
							<div className="sub-text">
								<ul>
									<li>
										<ul className="iconskill">
											{
												d.skills.map((line, i) => {
													let lowerLine=line.toLowerCase();

													return <li key={i} className={lowerLine}>{line}</li>;
												})
											}
										</ul>
									</li>
									<li>{d.des}</li>
									<li><a href={d.url} className="link" target="portfolio">{d.url}</a></li>
								</ul>
							</div>
						</div>
					)
				}
			</div>
		</div>	
	)
}

export default Project
