import React, { useState } from 'react';
import './resume.styles.css';

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

    const ResumeHeading = (props) => {
        return (
            <div id="resume" className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (<div></div>)
                    }
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        )
    };


    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work Experience", logoSrc: "work-history.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Nucamp "}
                subHeading={"Software Engineering Bootcamp"}
                fromDate={"Jan 22"}
                toDate={"Dec 22"}
            />
            <ResumeHeading
                heading={"Humber College"}
                subHeading={"Bachelor Degree in Interior Design"}
                fromDate={"Sep 10"}
                toDate={"Apr 14"}
            />
            <ResumeHeading
                heading={"Aptech Computer Education Center"}
                subHeading={"Adcanced Diploma in Software Engineering"}
                fromDate={"May 02"}
                toDate={"May 05"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
                heading={"Loosid"}
                subHeading={"Project Manager"}
                fromDate={"Feb 23"}
                toDate={"Present"}
            />
            <ResumeHeading
                heading={"Brainnest"}
                subHeading={"Frontend Developer Trainer"}
                fromDate={"Jan 23"}
                toDate={"Feb 23"}
            />
            <ResumeHeading
                heading={"Brainnest"}
                subHeading={"Frontend Developer Trainer"}
                fromDate={"Nov 22"}
                toDate={"Dec 22"}
            />

            <ResumeHeading
                heading={"E-teacher Group"}
                subHeading={"Customer Service & Technical Support"}
                fromDate={"Feb 21"}
                toDate={"Sep 21"}
            />
            <ResumeHeading
                heading={"Qatar Engineering and Industrial Consultancy"}
                subHeading={"Interior Designer and Project Manager Assistant"}
                fromDate={"May 18"}
                toDate={"Jan 20"}
            />
        </div>,

        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Digital Illustrating"
                description="Started Learning Drawing Manga and Chibi characters"
            />
            <ResumeHeading
                heading="Home Decoration"
                description="Love flipping home and coming up with new designs and adding personal peices to every corner"
            />
            <ResumeHeading
                heading=""
                description="Design Hype - Streetwear - Hip Hop Clothes "
            />
        </div>
    ];


    const handleCarousel = (index) => {
        let offsetHeight = 360;
        let newCarouselOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarouselOffSetStyle(newCarouselOffset);
        setSelectedBulletIndex(index);
    };


    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousel(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img
                    className='bullet-logo'
                    src={require(`../../img/Resume/${bullet.logoSrc}`)}
                    alt="bullet Icon"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }



    const getResumeScreen = () => {
        return (
            <div
                style={carouselOffSetStyle.style}
                className="resume-details-carousel"
            >
                {resumeDetails.map((resumeDetail) => resumeDetail)}
            </div>
        );
    };


    return (
        <div className='resume-container'>
            <div className='resume-content'>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className="bullets">
                                {getBullets()}
                            </div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>
                        {getResumeScreen()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume;