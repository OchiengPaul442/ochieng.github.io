import React from 'react';
import './head.css';
import { RecButtons } from '../../components/buttons/Buttons';
import { Twitter, Github, Linkedin, Facebook, Doc, logo, menu } from '../../constants';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/clark.json';
import CircularIcons from '../../components/circularicon/CircularIcons';
import Modal from '../../components/modals/Modal';
import Scroll from '../../components/scroll/Scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const Head = () => {
    // screen width
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    //show and hide modal
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // height from top
    const [height, setHeight] = React.useState(0);

    const handleScroll = () => {
        setHeight(window.scrollY);
    };

    // fix navbar on scroll
    const [show, setShow] = React.useState(true);
    const [lastScroll, setLastScroll] = React.useState(0);

    const controlNavbar = () => {
        if (window.scrollY >= lastScroll) {
            setShow(false);
        } else {
            setShow(true);
        }
        setLastScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', controlNavbar);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handlePress = () => {
        // download resume
        const Doc = 'https://drive.google.com/file/d/1hDb-VbYs0GMKGoMr7_a-RxxsdsGwLSYc/view?usp=drive_link';
        window.open(Doc, '_blank');
    };

    return (
        <section id="home">
            <header className="header">
                <div className="container">
                    <nav
                        className={show ? 'navbar' : 'navbar hidden'}
                        style={
                            height
                                ? { backgroundColor: '#5a5d87' }
                                : { backgroundColor: 'transparent', boxShadow: 'none' }
                        }
                    >
                        <a href="@" className="nav__logo">
                            <img src={logo} alt="paulslogo" />
                            <h1>PAUL</h1>
                        </a>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="https://www.linkedin.com/in/paulochieng442" className="nav__link">
                                    <img src={Linkedin} alt="GitHub" />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="https://twitter.com/OchiengTech" className="nav__link">
                                    <img src={Twitter} alt="Twitter" />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="https://www.facebook.com/ochieng.paul.714" className="nav__link">
                                    <img src={Facebook} alt="FaceBook" />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="https://github.com/OchiengPaul442" className="nav__link">
                                    <img src={Github} alt="GitHub" />
                                </a>
                            </li>
                        </ul>
                        <button onClick={handleShowModal} className="ham__menu">
                            <img src={menu} height={30} width={30} alt="menu" />
                        </button>
                    </nav>

                    <div className="intro__wrapper">
                        <div className="intro">
                            <h1 className="intro__title">Hey, I'm Paul</h1>
                            <h2 className="intro__subtitle">I'm a web and mobile developer</h2>
                            <p className="intro__text">
                                I'm based in Kampala, Uganda. I have 3 years of experience in creating beautiful and
                                functional websites and apps for various clients and projects. I'm passionate about
                                using the latest technologies and best practices to deliver high-quality solutions that
                                meet your needs and expectations. Whether you need a landing page, an e-commerce site, a
                                blog, or mobile application, I'm here to help you achieve your goals.
                            </p>
                            <div style={{ display: 'flex' }}>
                                <CircularIcons
                                    icon={Twitter}
                                    linkto="https://twitter.com/OchiengTech"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 3,
                                    }}
                                    alt="css"
                                    circledimension={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: 'Black',
                                    }}
                                />
                                <CircularIcons
                                    icon={Github}
                                    linkto="https://github.com/OchiengPaul442"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 3,
                                    }}
                                    alt="Github"
                                    circledimension={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: 'Black',
                                    }}
                                />
                                <CircularIcons
                                    icon={Linkedin}
                                    linkto="https://www.linkedin.com/in/paulochieng442"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 3,
                                    }}
                                    alt="Linkedin"
                                    circledimension={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: 'Black',
                                    }}
                                />
                                <CircularIcons
                                    icon={Facebook}
                                    linkto="https://www.facebook.com/ochieng.paul.714"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 3,
                                    }}
                                    alt="Facebook"
                                    circledimension={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: 'Black',
                                    }}
                                />
                            </div>

                            <RecButtons
                                text="SEE MY RESUME"
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#000000',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    margin: '35px 0',
                                }}
                                icon={Doc}
                                iconstyle={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '10px',
                                }}
                                onPress={handlePress}
                            />
                        </div>
                        <div className="intro__img">
                            <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                                <Lottie
                                    options={defaultOptions}
                                    height={breakpoint < width ? 400 : 300}
                                    width={breakpoint < width ? 400 : 300}
                                />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </header>

            {/* modal */}
            <Modal show={showModal ? 'modal__show' : 'modal__hide'} close={handleCloseModal} />
            <Scroll
                to="work"
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                }}
            />
        </section>
    );
};

export default Head;
