import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from 'swiper/modules'
import data from "./data";

function OpenSource() {

	let openData=data.openSource;

	return (
		<div id="page4">
			<div className="title serif">Open Source</div>
			<div className="main-product">
				<Swiper
					loop={true}
					slidesPerView={1.5}
					centeredSlides={true}
					spaceBetween={20}
					autoplay={{
						delay: 100,
						disableOnInteraction: false,
					}}
					speed={2500}
					breakpoints={{
						769: {
						slidesPerView: 3,
						spaceBetween: 20,
						},
						1025: {
						slidesPerView: 4.5,
						spaceBetween: 50,
						},
					}}
					modules={[Autoplay]}
					className="swiper"
				>
					{
						openData.map((d, i) => (
							<SwiperSlide key={i}>
								<div className="thumb">
									<a href={d.link} target="_blank" rel="noopener noreferrer">
										<img src={d.image} alt={d.name} />
									</a>
								</div>
								<div className="desc">
									<div className="name serif">{d.name}</div>
									<p>
										{
											d.des.map((line, i) => (
												<span key={i}>{line}</span>
											))
										}
									</p>
									<a href={d.link} target="_blank" rel="noopener noreferrer" className="btn">
										View More
									</a>
								</div>
							</SwiperSlide>
        			  ))
					}
				</Swiper>
			</div>
		</div>
	);
}

export default OpenSource;
