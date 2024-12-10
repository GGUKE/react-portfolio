function Footer() {
	return (
		<div id="footer">
			<div className="ft-wrap">
				<div className="ft-left">
					<div className="ft-logo">
						<a href=""><span>{'{'}</span>GGUKE<span>{'}'}</span></a>
					</div>
					<div className="ft-info">
						<p>
							<span><strong>PHONE</strong>010-9923-4795</span>
							<span><strong>MAIL</strong>pllbong2020@naver.com</span>
						</p>
						<p>
							<span><strong>GIT</strong><a href="https://github.com/GGUKE/"  target="_blank">https://github.com/GGUKE/</a></span>
							<span><strong>PORTFOLIO</strong>
								<a href="https://github.com/GGUKE/JG-pf" target="_blank">https://github.com/GGUKE/JG-pf</a>
							</span>
						</p>
					</div>
				</div>
				<div className="ft-right">
					<div className="ft-link">
						<a href="">About Us</a>
						<a href="" className="privacy-btn"><strong>개인정보처리방침</strong></a>
					</div>
					<div className="ft-sns">
						<a href=""><i className="xi-linkedin"></i></a>
						<a href=""><i className="xi-facebook-official"></i></a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
