import React, { useEffect } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionTitle from "../../common/section.title";
import Container from "../../layouts/container";
import { MdSchool, MdOutlineWork } from "react-icons/md";

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
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							date="2014-2018"
							iconStyle={{
								background: "#3e497a",
								color: "#ffff",
							}}
							icon={<MdSchool />}
						>
							<h3 className="vertical-timeline-element-title">
								S1 Teknik Informatika
							</h3>
							<p>Universitas Langlangbuana</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--education"
							date="2014-2018"
							iconStyle={{
								background: "#FB923C",
								color: "#ffff",
							}}
							icon={<MdOutlineWork />}
						>
							<h3 className="vertical-timeline-element-title">
								S1 Teknik Informatika
							</h3>
							<p>Universitas Langlangbuana</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</div>
			</Container>
		</section>
	);
};

export default Experience;
