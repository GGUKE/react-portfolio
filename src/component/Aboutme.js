import { useEffect } from "react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
	
	useEffect(() => {
		let logoColor=document.querySelector("#header");
		let page1=document.querySelector("section #page1");

		gsap.timeline({
			scrollTrigger: {
				trigger: page1,
				scrub: true,
				start: "top 1%",
				// markers: true,
				onEnter: function(){
					logoColor.classList.add("on");
				},
				onLeaveBack: function(){
					logoColor.classList.remove("on");
				} 
			}
		});
		
		if(window.matchMedia("(max-width: 768px)").matches){
			gsap.utils.toArray(".main-typo").forEach(function(mainTypo){
				const tl=gsap.timeline({
					scrollTrigger: {
						trigger: mainTypo,
						scrub: 1,
						start: "top bottom",
					}
				});
		
				tl.to(mainTypo.querySelector("div:nth-child(1)"), {
					x: "-7%",
					duration: 1
				});
		
				tl.to(mainTypo.querySelector("div:nth-child(2)"), {
					x: "7%",
					duration: 1,
					delay: -1
				});
			});
		}
		else{ // pc
			gsap.utils.toArray(".main-typo").forEach(function(mainTypo){
				console.log(mainTypo);
				// const tl=gsap.timeline({
				// 	scrollTrigger: {
				// 		trigger: mainTypo,
				// 		scrub: 1,
				// 		start: "top bottom"
				// 	}
				// });
		
				tl.to(mainTypo.querySelector("div:nth-child(1)"), {
					x: "-20%",
					duration: 1
				});
		
				tl.to(mainTypo.querySelector("div:nth-child(2)"), {
					x: "20%",
					duration: 1,
					delay: -1
				});
			});
		}
		
		gsap.utils.toArray(".scale-ani").forEach(function(scaleAni){
			const tl=gsap.timeline({
				scrollTrigger: {
					trigger: scaleAni,
					start: "top center",
					end: "bottom top",
					// markers: true,
					scrub: 1,
					onEnter: function(){
						scaleAni.classList.add("active");
					},
					onLeaveBack: function() {
						scaleAni.classList.remove("active");
					}
				},
			});
		});

	});

	return (
		<div id="page1">
			<div className="main-about">
				<div className="flex-cont">
					<div className="img">
						<div className="img-wrap scale-ani">
							<img src="/image/main_about1.jpg" alt="main about1" />
						</div>
					</div>
					<div className="con">
						<div className="main-tit serif">About me</div>
						<div className="txt">
							<p>새로운 시도를 두려워하지 않고, 모르는 것이 있다면 그에 대해 알 때까지 끊임없이 노력하는 개발자입니다. 저는 항상 도전적인 과제를 통해 성장해 왔으며, 문제를 해결하기 위해 다양한 접근 방식을 탐구하는 것을 즐깁니다.</p>
							<p className="serif">I am a developer who is not afraid to try new things and keeps trying until I figure out what I don't know.</p>
						</div>
					</div>
				</div>
				<div className="main-typo">
					<div><span className="serif">ABOUT GROWTH</span></div>
					<div>PASSION</div>
				</div>
			</div>	
		</div>	
	)
}

export default Aboutme;
