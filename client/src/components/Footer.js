import React from 'react';
import { Box, Container, Row, Column, FooterLink, Heading, ContactUs } from './FooterStyles';

const Footer = () => {
	return (
		<Box>
			{/* <h1 style={{ color: "black", textAlign: "center", marginTop: "-70px", fontSize: "1.3rem" }}>
				© Copyright Memories.
			</h1>
			<h1 style={{ color: "black", textAlign: "center", marginTop: "-10px", fontSize: "1.3rem" }}>
				All Rights Reserved.
			</h1> */}
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Opportunities</Heading>
						<FooterLink href="#">Writing</FooterLink>
						<FooterLink href="#">Internships</FooterLink>
						<FooterLink href="#">Coding</FooterLink>
						<FooterLink href="#">Teaching</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<ContactUs>+91 9819014002</ContactUs>
						<ContactUs>+91 8788014002</ContactUs>
						<ContactUs>iamsg@gmail.com</ContactUs>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
						<i className="fab fa-facebook-f">
							<span style={{ marginLeft: "10px" }}>
							Facebook
							</span>
						</i>
						</FooterLink>
						<FooterLink href="#">
						<i className="fab fa-instagram">
							<span style={{ marginLeft: "10px" }}>
							Instagram
							</span>
						</i>
						</FooterLink>
						<FooterLink href="#">
						<i className="fab fa-twitter">
							<span style={{ marginLeft: "10px" }}>
							Twitter
							</span>
						</i>
						</FooterLink>
						<FooterLink href="#">
						<i className="fab fa-youtube">
							<span style={{ marginLeft: "10px" }}>
							Youtube
							</span>
						</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};

export default Footer;

