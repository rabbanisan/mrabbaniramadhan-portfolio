import React, { useEffect } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import UserData from "../../../constant/user.data";
import SectionTitle from "../../common/section.title";
import Container from "../../layouts/container";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="experience md:mt-32">
			<SectionTitle>Experiences.</SectionTitle>
			<Container className={"bg-gray-200 py-4 -mt-10 md:-mt-24 md:pb-12"}>
				<div className="experience mt-12 md:mt-20">
					<VerticalTimeline lineColor="#3e497a">
						{UserData.experiences.map((item, i) => {
							return (
								<VerticalTimelineElement
									key={i}
									className={item.style}
									date={item.experienceDate}
									iconStyle={{
										background: `${item.iconStyleBg}`,
										color: `${item.iconStyleColor}`,
									}}
									// icon={<SchoolIcon />}
								>
									<h3 className="vertical-timeline-element-title">
										{item.experience}
									</h3>
									<p> {item.experienceDesc}</p>
								</VerticalTimelineElement>
							);
						})}
					</VerticalTimeline>
				</div>
			</Container>
		</section>
	);
};

export default Experience;
