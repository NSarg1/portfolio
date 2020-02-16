import React from "react";

import { StyledLink, StyledLabel } from "./About.styles";

const About = () => {
	return (
		<div className='About'>
			<h1 className='About_title title'>About me</h1>
			<div className='blank'>
				<div className='blank_top'>
					<div className='grid-block'>
						<label>Full name:</label>
						<span>Narek Sargsyan</span>
						<label>Tel.:</label>
						<span>(098) 03-26-26</span>
						<label>E-mail: </label>
						<span>NSarg7@gmail.com</span>
						<label>Date of birth:</label>
						<span> 19.07.1994</span>
					</div>

					<div className='grid-block'>
						<label className='grid-block--links'>Links:</label>
						<StyledLink
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/NSarg7'>
							GitHub
						</StyledLink>
						<StyledLink
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.facebook.com/NSarg7'>
							Facebook
						</StyledLink>
						<StyledLink
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.linkedin.com/in/nsarg7/'>
							Linkedin
						</StyledLink>
					</div>
				</div>
				<div className='blank_bottom'>
					<div className='u-flex u-margin-bottom-2'>
						<StyledLabel>Education:</StyledLabel>
						<div>
							<label>Self-educated with following courses and official documenation/</label>
							<p>Udemy – “The complete JavaScript course”.</p>
							<p>Udemy – “Build Responsive Real World Websites with HTML5 and CSS3”.</p>
							<p>Udemy – “Advanced CSS and Sass: Flexbox, Grid, Animations and More!”.</p>
							<p>
								Udemy – “The Complete React Developer in 2019 (w Redux, Hooks, GraphQL)”.
							</p>
							<label>Also waste my time in</label>
							<p>YSU, “Bachelor's degree of International Relations”.</p>
						</div>
					</div>
					<div className='u-flex u-margin-bottom-2'>
						<StyledLabel>
							WORKING <br />
							EXPERIENCE:
						</StyledLabel>
						<div>
							<p>Contract deal with Rumors Monitoring.</p>
							<p>Store Manager at MobileCentre Art LLC.</p>
							<p>
								Ministry of economic development and investments of the Republic of Armenia.
							</p>
						</div>
					</div>
					<div className='u-flex u-margin-bottom-2'>
						<StyledLabel>Skills:</StyledLabel>
						<div>
							<p>
								React JS, Redux(thunk, Sagas), JavaScript (OOP/FP), CSS(Sass, FlexBox,
								Grid), Firebase, Git/GitHub, WebPack, Babel, Photoshop, MS Office (Word,
								Excel, Powerpoint).
							</p>
						</div>
					</div>
					<div className='u-flex u-margin-bottom-2'>
						<StyledLabel>Languages:</StyledLabel>
						<div>
							<p>Armenian, English, Russian.</p>
						</div>
					</div>
					<div className='u-flex u-margin-bottom-2'>
						<StyledLabel>About me:</StyledLabel>
						<div>
							<p>
								Nobody has ready-made solutions. I am not an exception. But I am
								learning a lot and doing my best to have an ability to find solutions as
								fast as possible.I think this is a hallmark of a good programmer. I would be
								very happy to prove my words with work. I am open for any new tasks and
								challenges.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;