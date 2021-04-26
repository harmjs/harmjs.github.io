import React, {  useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import profileImageSrc from './images/profile.jpg';
import linearQuadtreeImageSrc from './images/linear_quadtree.png';
import cellularAutomatonImageSrc from './images/cellular_automaton.png';
import chessImageSrc from './images/chess.png';

import GitHubSVG from './svg/github.svg';
import FacebookSVG from './svg/facebook.svg';
import LinkSVG from './svg/link.svg';

const COLORS = {
    background: ["#1B1B1B", "#262626", "#3B3B3B"],
	foreground: ["#FFFFFF", "#E5E5E5", "#B4B4B4", "#838383"],
	active: ["#FFAA00"]
}

const marginMaxWidth = 600 + "rem";
const headerFooterHeight = 36 + "rem";

const GlobalStyle = createGlobalStyle`
    html
    {
        font-size: 1.6px;
        color: ${COLORS.foreground[1]};
        margin: 0px;
        padding: 0px;
        overflow: hidden;
        font-family: 'Open Sans', sans-serif;
    }

    body
    {
        margin: 0px;
    }

    div
    {
        box-sizing: border-box;
    }

    p
    {
        box-sizing: border-box;
		margin: 0rem;
        font-size: 10rem;
        color: ${COLORS.foreground[1]};
        font-family: 'Open Sans', sans-serif;
    }

    h1
    {
        font-family: 'Roboto', sans-serif;
        padding-top: 6rem;
        margin: 0rem 6rem;
        font-size: 30rem;
    }

    h2
    {
        font-family: 'Open Sans', sans-serif;
        padding-top: 30rem;
        margin: 0rem 6rem;
        font-size: 16rem;
        padding-bottom: 6rem;
    }

    svg
    {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 3rem;
    }
`;

const HeaderSection = styled.header`
    height: ${headerFooterHeight};
    position: fixed;
    width: 100%;
    background-color: ${COLORS.background[0]};

    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

const Link = styled.a`
    cursor: pointer;
    font-size: 11rem;
    padding: 4rem 6rem;

    color: ${({ isActive }) => COLORS.foreground[isActive ? 3 : 1]};

    :hover 
    {
        color: white;
        text-decoration: underline;
    }
`;

const TakeSpace = styled.div`
    flex: 1;
    aria-hidden: true;
`;

const TakeSpaceFooter = styled(TakeSpace)`
    padding-top: 30rem;
`;

const ScrollableSection = styled.div`
    position: absolute;
    width: 100%;
    top: ${headerFooterHeight};
    bottom: 0rem;
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.background[1]};
    box-sizing: border-box;
`;

const Scrollable = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const ContentMargin = styled.main`
    width: 100%;
    margin: auto;
    max-width: ${marginMaxWidth};
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 ${headerFooterHeight};
    box-sizing: border-box;
    background-color: ${COLORS.background[0]};
    padding: 3rem;
`;

const RowSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
`;

const ColumnSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const Block = styled.div`
    margin-top: 30rem;
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.background[2]};
    padding: 12rem;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2 2 240rem;
    padding: 12rem;
    background-color: ${COLORS.background[2]};
    justify-content: space-between;
`;

const LinkContainer = styled.div`
    display: flex;
    padding-top: 12rem;
`;

const PhotoContainer = styled.div`
    flex: 1 1 120rem;
    box-sizing: border-box;
    padding: 12rem;
    background-color: ${COLORS.background[0]};
`;

const Photo = styled.img`
    max-width: 180rem;
    width: 100%;
    &:after
    {
        display: block;
        content: "";
        padding-bottom: 100%;
    }`
;

const SVGLinkBox = styled.a`
    display: block;
    box-sizing: border-box;
    height: 28rem;
    width:  28rem;
    padding: 2rem;

    margin: 0rem 3rem;

    border: 1rem solid ${COLORS.foreground[2]};

   color: ${COLORS.foreground[2]};

   :hover
   {
       color: white;
       text-decoration: underline;
       border-color: white;
   }
`;

const FooterText = styled.div`
    margin: 0rem 6rem;
    font-size: 9rem;
    color: ${COLORS.foreground[1]};
`;


const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 24rem 6rem;
    margin-bottom: 0rem;
`;

const ContactField = styled.div`
    margin: 6rem 6rem;
    display: flex;
    flex-direction: column;
    padding: 6rem;
	overflow:auto;
	
	background-color: ${COLORS.background[2]};
	border: 1px solid ${COLORS.foreground[2]};

	:hover
	{
		color: white;
		border-color: white;
	}

	:focus-within
	{
		border-color: ${COLORS.active[0]};
	}
`;

const FormFieldFlexRow = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`;

const ContactFieldSmall = styled(ContactField)`
   flex: 1 1 80rem;
`;

const ContactFieldMedium = styled(ContactField)`
    flex: 2 2 160rem;
`;

const FieldLabel = styled.label`
	color: inherit;
    font-size: 9rem;
`;

const FieldInput = styled.input`
	background-color: ${COLORS.background[2]};
	font-size: 10rem;
	color: ${COLORS.foreground[0]};
	border: none;
`;

const TextBoxInput = styled.textarea`
	color: inherit;
	font-family: 'Roboto', sans-serif;
	background-color: ${COLORS.background[2]};
	font-size: 10rem;
	color: ${COLORS.foreground[0]};
	border: none;
	resize: none;
	overflow: auto;
	height: 120rem;
`;

const SubmitButton = styled.button`
    box-sizing: border-box;
	margin: 6rem;
	margin-bottom: 0rem;
	font-family: 'Roboto', sans-serif;
	padding: 6rem;
	background-color: ${COLORS.background[2]};
	border: 1px solid ${COLORS.foreground[2]};
	color: ${COLORS.foreground[2]};
	font-size: 11rem;
	
	cursor: pointer;

	:hover 
    {
		color: white;
		border-color: white;
    }
`;

const SVGButton = ({ href, title, SVGElement }) =>
(
    <SVGLinkBox href={href} title={title}>
        <SVGElement />
    </SVGLinkBox>
);


const HomeRoute = () => (
    <ContentMargin>
        <h1>Jacob Sloots</h1>
        <h2>Web Developer Portfolio</h2>
        <RowSection>
            <Description>
                <p>
                    Welcome to my portfolio!<br /><br /> 
                    I'm a self-taught web developer from Hamilton Ontario.
                </p>
            </Description>
            <PhotoContainer>
                <Photo src={profileImageSrc}></Photo>
            </PhotoContainer>
        </RowSection>
    </ContentMargin>
);

const ProjectsRoute = () =>
{
    return (
        <ContentMargin>
            <h1>Projects</h1>
            <h2>Linear Quadtree Paint</h2>
            <RowSection>
                <Description>
                    <p>
                        December 2020 <br/><br/>
                        I decided to spice up a React MS Paint app by using a linear quadtree to store the pixel data. I added a button which renders the quadtree divisions as you draw, and I think the effect is pretty neat.<br/><br/>
                        For the apps relatively complex state, I used a controller with both public immutable properties which can be passed as React props, and private mutable properties for internal state.
                    </p>
                    <LinkContainer>
                        <SVGButton 
                            href="https://github.com/harmjs/linear-quadtree-paint"
                            title="Link to GitHub repository"
                            SVGElement={GitHubSVG}
                        />
                        <SVGButton 
                            href="./linear-quadtree-paint"
                            title="Link to live website"
                            SVGElement={LinkSVG}
                        />
                    </LinkContainer>
                </Description>
                <PhotoContainer>
                    <Photo src={linearQuadtreeImageSrc}></Photo>
                </PhotoContainer>
            </RowSection>
            <h2>Cellular Automata Generator</h2>
            <RowSection>
                <Description>
                    <p>
                        June 2020 <br/><br/>
                        In this project, I made what I thought was a simple interface to synthesize different 2D totalistic cellular automata, on a variety of different grids. However, I didn't anticipate how hard the UI/UX design would be.<br/><br/>
                        I still learned a ton. I'm particularly proud of how I mapped different lattice spaces onto each other.
                    </p>
                    <LinkContainer>
                        <SVGButton 
                             href="https://github.com/harmjs/react-cellular-automata"
                            title="Link to GitHub repository"
                            SVGElement={GitHubSVG}
                        />
                    </LinkContainer>
                </Description>
                <PhotoContainer>
                    <Photo src={cellularAutomatonImageSrc}></Photo>
                </PhotoContainer>
            </RowSection>
            <h2>Chess Board</h2>
            <RowSection>
                <Description>
                    <p>
                        August 2020 <br/><br/>
                        Like many others, I took up chess during the pandemic, which inspired me to make a chess board which allows a user to make legal moves on it.<br/><br/>
                        Implementing pawn promotions, enpassent, check, castling, and stalemate turned out to be surprisingly fun. Initially I wanted to implement an engine but soon realized I was over my head. I'd like to return to this project once after doing more research on chess algorithms and data structures.
                    </p>
                    <LinkContainer>
                    <LinkContainer>
                        <SVGButton 
                            href="https://github.com/harmjs/react-chess"
                            title="Link to GitHub repository"
                            SVGElement={GitHubSVG}
                        />
                    </LinkContainer>
                    </LinkContainer>
                </Description>
                <PhotoContainer>
                    <Photo src={chessImageSrc}></Photo>
                </PhotoContainer>
            </RowSection>
        </ContentMargin>
    );
}

const AboutRoute = () =>
(
    <ContentMargin>
        <h1>About Me</h1>
        <Block>
            <p>
                I’m Jacob, a self-taught web developer from Hamilton Ontario, with a honours degree in life science and minor in English.<br/><br/>
                After university, I decided to take some time off and teach myself coding. I can now truthfully admit that the appeal was for more of a limit experience then a quick and pragmatic path towards a stable income. It wasn't easy, and there are many thing I might do differently knowing what I know now, but the overall journey of self-knowledge and mastery was irreplaceable.<br/><br/>
                A long-term hobby of mine has been making music on my computer.  Recently, I've been fascinated with the mixing and mastering process, as it's both highly technical but also creative. I’m certainly no expert, but it very satisfying to comb something relatively listenable out of overcomplicated noise.<br/><br/>
                I'm always picking up new hobbies and interests. Before the lockdown I become obsessed with the gym, tracking calories and cooking healthy foods. Initially the pandemic was quite a blow, but now I've found new thing to do, like playing tennis, starting a Stardew Valley server, or watching weird movies with my friends through discord. I even organized a book club, and we are currently working our way through The Wind-Up Bird Chronicle by Haruki Murakami.<br/><br/>
            </p>
        </Block>

    </ContentMargin>
);

const ContactRoute = () =>
{
    return (
            <ContentMargin>
            <h1>Contact</h1>
            <ColumnSection>
                <Block>
                    <p>
                        If you have any questions about my experience or qualifications please shoot me a message using the form provided below. <br/>
                        <br/>
                        I'd love to hear from you!
                    </p>
                </Block>
                <ContactForm>
                    <FormFieldFlexRow>
                        <ContactFieldSmall>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
							<FieldInput id="name" placeholder="Andrew Ryan "/>
                        </ContactFieldSmall>
                        <ContactFieldMedium>
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <FieldInput id="email" placeholder="whoisandrewryan@gmail.com "/>
                        </ContactFieldMedium>
                    </FormFieldFlexRow>
                    <ContactField>
                        <FieldLabel htmlFor="subject">Subject</FieldLabel>
                        <FieldInput 
                            id="subject" 
                            placeholder="Invitation to join a highly secretive project" 
                        />
                    </ContactField>
                    <ContactField>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <TextBoxInput 
                            id="message" 
                            placeholder="Dear Jacob,&#013;&#013;I was deeply impressed reading your web developer portfolio. Do you have any experience with steam powered logic gates?&#013;&#013;Regards,&#013;Andrew Ryan"
                        />
                    </ContactField>
                    <SubmitButton>
                        Send Message
                    </SubmitButton>
                </ContactForm>
            </ColumnSection>

        </ContentMargin>
    )
}

const NotFoundRoute = () => 
(
    <ContentMargin>
        <h1>Page Not Found</h1>
        <RowSection>
            <Description>
                <p>We are sorry, but we couldn't find the page you were looking for.</p>
            </Description>
        </RowSection>
    </ContentMargin>
);


const ROUTER = new Map([
    ['', HomeRoute],
    ['#/projects', ProjectsRoute],
    ['#/about', AboutRoute],
    ['#/contact', ContactRoute],
    ['#/404', NotFoundRoute]
]);

const getRouteComponent = (routeHash) => 
{
    if (ROUTER.has(routeHash)) return ROUTER.get(routeHash);
    return NotFoundRoute;
}

const App = () =>
{
    const [ActiveRouteComponent, setActiveRouteComponent] = 
        useState(() => getRouteComponent(window.location.hash));

    const setLocationHash = (routeHash) => window.location.hash = routeHash;

    useEffect(() =>
    {
        const onLocationHashChange = () => {
            setActiveRouteComponent(() => getRouteComponent(window.location.hash));
        };

        window.addEventListener('hashchange', onLocationHashChange);
        return () => window.removeEventListener('hashchange', onLocationHashChange);
    })

    return (
        <>
            <GlobalStyle />
            <HeaderSection role="navigation">
                <Link 
                    isActive={ActiveRouteComponent === HomeRoute} 
                    onClick={() => setLocationHash("")}
                >
                    Home
                </Link>
                <TakeSpace></TakeSpace>
                <Link 
                    isActive={ActiveRouteComponent === ProjectsRoute} 
                    onClick={() => setLocationHash("/projects")}
                >
                    Projects
                </Link>
                <Link 
                    isActive={ActiveRouteComponent === AboutRoute} 
                    onClick={() => setLocationHash("/about")}
                >
                    About Me
                </Link>
                <Link 
                    isActive={ActiveRouteComponent === ContactRoute} 
                    onClick={() => setLocationHash("/contact")}
                >
                    Contact
                </Link>
            </HeaderSection>
            <ScrollableSection>
                <Scrollable>
                    <ActiveRouteComponent />
                    <TakeSpaceFooter></TakeSpaceFooter>
                    <Footer>
                        <SVGButton 
                            href="https://github.com/harmjs/react-chess"
                            title="Link to my GitHub profile"
                            SVGElement={GitHubSVG}
                        />
                        <SVGButton 
                            href="https://www.facebook.com/jsloots/"
                            title="Link to my Facebook profile"
                            SVGElement={FacebookSVG}
                        />
                        <FooterText>
                            Jacob Sloots <br/>
                            2020
                        </FooterText>
                    </Footer>
                </Scrollable>
            </ScrollableSection>
        </>
    );
};

export default App;


