import React from 'react';
import './project.css';
import CircularIcons from '../../components/circularicon/CircularIcons';
import { laptop, Github } from '../../constants';
import Lottie from 'react-lottie';

const Projects = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../../assets/animations/eye.json'),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section className="wrapper" id="projects">
            <div className="container">
                <h2 className="project__title">
                    <CircularIcons
                        icon={laptop}
                        style={{
                            width: '2.5rem',
                            height: '2.5rem',
                        }}
                        circledimension={{
                            width: 64,
                            height: 64,
                        }}
                        text="Projects"
                        textstyle={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#5a5d87',
                        }}
                    />
                </h2>
                <div className="projects_con">
                    <div className="project__card">
                        <h1 className="project__card__title">My Portfolio site</h1>
                        <p className="project__card__description">
                            Software Developer Portfolio site built with ReactJS to showcase my skills and projects.
                        </p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/OchiengPaul442/portfoliosite.git"
                            className="project__link__btn"
                        >
                            <CircularIcons
                                icon={Github}
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                alt="github"
                                circledimension={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: '#000',
                                    borderRadius: '20%',
                                    margin: 0,
                                }}
                            />
                        </a>
                    </div>
                    <div className="project__card">
                        <h1 className="project__card__title">Cubeenineering and general supplies LTD (Website)</h1>
                        <p className="project__card__description">
                            A website developed for a company specializing in the supply of building and construction
                            materials, electrical and plumbing materials, and various hardware items. The site was built
                            using React and Bootstrap for the frontend, with Firebase Cloud serving as the backend.
                        </p>

                        <div className="view__wrapper">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/OchiengPaul442/newcube"
                                className="project__link__btn"
                            >
                                <CircularIcons
                                    icon={Github}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    alt="github"
                                    circledimension={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: '#000',
                                        borderRadius: '20%',
                                        margin: 0,
                                    }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://cubeengineeringltd.com"
                                className="view__project__btn"
                            >
                                <Lottie options={defaultOptions} height={30} width={30} />
                            </a>
                        </div>
                    </div>
                    <div className="project__card">
                        <h1 className="project__card__title">E-LOOK (Website for Mobile App)</h1>
                        <p className="project__card__description">
                            A website for a mobile app showcasing the features of the app. The app is a cross-platform
                            mobile application that allows users to search for and book beauty services.
                        </p>
                        <div className="view__wrapper">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/E-LOOK/E-look.github.io.git"
                                className="project__link__btn"
                            >
                                <CircularIcons
                                    icon={Github}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    alt="github"
                                    circledimension={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: '#000',
                                        borderRadius: '20%',
                                        margin: 0,
                                    }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://e-look.github.io/index.html"
                                className="view__project__btn"
                            >
                                <Lottie options={defaultOptions} height={30} width={30} />
                            </a>
                        </div>
                    </div>
                    <div className="project__card">
                        <h1 className="project__card__title">Cloud chat(chat application)</h1>
                        <p className="project__card__description">
                            A chat application built with HTML,CSS, NodeJS, ExpressJS, and the socket.io library. It
                            allows users to chat with each other in real time.
                        </p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/OchiengPaul442/cloud_chat_1.git"
                            className="project__link__btn"
                        >
                            <CircularIcons
                                icon={Github}
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                alt="github"
                                circledimension={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: '#000',
                                    borderRadius: '20%',
                                    margin: 0,
                                }}
                            />
                        </a>
                    </div>
                    <div className="project__card">
                        <h1 className="project__card__title">Community Box (Website)</h1>
                        <p className="project-card-description">
                            'Community Box' is a website designed to serve as a digital platform for community
                            engagement. It provides a space for members to connect, share, and engage in a variety of
                            activities and discussions.
                        </p>
                        <div className="view__wrapper">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/OchiengPaul442/community_box"
                                className="project__link__btn"
                            >
                                <CircularIcons
                                    icon={Github}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    alt="github"
                                    circledimension={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: '#000',
                                        borderRadius: '20%',
                                        margin: 0,
                                    }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.communitybox.africa/"
                                className="view__project__btn"
                            >
                                <Lottie options={defaultOptions} height={30} width={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
