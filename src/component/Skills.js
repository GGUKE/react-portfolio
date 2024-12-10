import { useEffect } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Skills() {

	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: "#page2",
				scrub: true,
				start: "top center",
				// markers: true,
				onEnter: function () {
				document.body.classList.add("active");
				},
				onEnterBack: function () {
				document.body.classList.add("active");
				},
				onLeaveBack: function () {
				document.body.classList.remove("active");
				}
			}
		});

	});

  return (
    <div id="page2">
      	<div className="title serif">skills</div>
			<div className="inner">
				<div id="main">
					<Swiper
						className="mainSwiper"
						loop={true}
						pagination={{
						el: '.swiper-pagination',
						clickable: true,
						}}
						breakpoints={{
						480: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1020: {
							slidesPerView: 3,
							spaceBetween: 30,
						}
						}}
					>
						<SwiperSlide>
						<a href="">
							<p className="label">specs1</p>
							<p className="titles">Frontend Dev</p>
							<p className="description">
							<span>JavaScript / EcmaScript 2024</span>
							<span>React / Axios, Redux, Router</span>
							<span>Node.js / Express, EJS</span>
							<span>MongoDB</span>
							</p>
							<div className="square_line"></div>
						</a>
						</SwiperSlide>
						<SwiperSlide>
						<a href="">
							<p className="label">specs2</p>
							<p className="titles">Web</p>
							<p className="description">
							<span>HTML Accessibility</span>
							<span>CSS + SASS Prefix</span>
							<span>jQuery Library</span>
							</p>
							<div className="square_line"></div>
						</a>
						</SwiperSlide>
						<SwiperSlide>
						<a href="">
							<p className="label">specs3</p>
							<p className="titles">Mobile Dev</p>
							<p className="description">
							<span>PWA : Progressive Web App</span>
							<span>Responsive CSS</span>
							<span>Tailwind CSS Framework</span>
							</p>
							<div className="square_line"></div>
						</a>
						</SwiperSlide>
						<SwiperSlide>
						<a href="">
							<p className="label">I aspire to go further and grow.</p>
							<p className="titles"></p>
							<div className="square_line"></div>
						</a>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
    </div>
  );
}

export default Skills;

