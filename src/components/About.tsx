import { BiFontFamily } from "react-icons/bi";
import { Link } from "react-router-dom";

function About() {

    return (
        <div id="about-container">
            <div className="about-content">

                {/* ------------------------------ */}
                {/* About Me (Information) section */}
                {/* ------------------------------ */}
                
                <span style={contentTitle}>Information</span>

                <div className="about-section">
                    <span style={textStyle1}>Fullname:</span>
                    <span style={centerTextAdjust}>Alexandru Nicolae</span>
                </div>

                <div className="about-section">
                    <span style={textStyle1}>Date of Birth:</span>
                    <span style={centerTextAdjust}>06/15/2007</span>
                </div>

                <div className="about-section">
                    <span style={textStyle1}>Location:</span>
                    <span style={centerTextAdjust}>Oldbury, Uk</span>
                </div>
 
                <div className="about-section">
                    <span style={textStyle1}>Main Stack:</span>
                    <span style={centerTextAdjust}>HTML5, CSS, Javascript/Typescript, React + Node</span>
                </div>

                <div className="about-section">
                    <span style={textStyle1}>Backend:</span>
                    <span style={centerTextAdjust}>Node.js, Express</span>
                </div>

                <div className="about-section">
                    <span style={textStyle1}>Database:</span>
                    <span style={centerTextAdjust}>Supabase</span>
                </div>

                <div className="about-section">
                    <span style={textStyle1}>Email:</span>
                    <span style={centerTextAdjust}>alexandru.nic14@proton.me</span>
                </div>

                <div className="about-section">
                    <span style={textStyle1}>Github:</span>
                    <Link to="https://github.com/Alexandru101" style={{ ...centerTextAdjust, color: "#00ff4c" }}>https://github.com/Alexandru101</Link>
                </div>

                <div id="about-description">Description</div>
                <div id="about-description-container">
                    <text style={{ fontSize: "14px"}}>
                        I am an aspiring web developer eager to enter the job market and contribute to real projects designed for public use,
                        while continuing to expand my proficiency with JavaScript and modern web development frameworks. I am always enthusiastic
                        about learning and working with different frameworks aswell as imrpoving my programming ability.
                    </text>

                    <br></br><br></br>
                    
                    <text style={{ fontSize: "14px"}}>
                        I have completed projects
                        using Next.js, React Native, and Express. to expand my ability, While I am not yet fully proficient, I am actively advancing
                        my skills in JavaScript through a series of diffrent projects working with things such as "Data", "Frontend", "Backend" and more.
                    </text>

                    <br></br><br></br>

                    <text style={{ fontSize: "14px"}}>
                        As of the creation of this portfolio, I am focusing exclusively on JavaScript, React, and Node.js/Express
                        to deepen my experience in building full-stack applications with robust front-end and back-end functionality.
                        This focus is also intended to prepare me to become job-ready and capable of contributing effectively in a professional work environment.
                    </text>
                </div>
            </div>

            {/* ----------------------------- */}
            {/* About Me (Experience) section */}
            {/* ----------------------------- */}

            <div className="about-content">
                <span style={contentTitle}>Experience</span>

                <div className="about-experience-section">
                    <span style={{ ...textStyle1, width: "315px" }}>Programming Languages:</span>
                    <span className="about-experience-container">
                        Lua, C++, Javascript, CSS + Tailwind CSS, HTML5
                    </span>
                </div>

                <div className="about-experience-section">
                    <span style={{ ...textStyle1, width: "280px"}}>Javascript Frameworks:</span>
                    <span className="about-experience-container">
                        React, React Native, Next.js, Express 
                    </span>
                </div>

                <div className="about-experience-section">
                    <span style={{ ...textStyle1 }}>Database:</span>
                    <span className="about-experience-container">
                        Supabase (Postgres)
                    </span>
                </div>

                <div className="about-section">
                    <span style={textStyle1}>Javascript Start Date (UK Format):</span>
                    <span style={centerTextAdjust}>01/02/2026</span>
                </div>

                <div id="about-projects">Javascript Projects</div>
                <div id="about-projects-container">
                    <div className="about-project-card">
                        <span style={projectCardTitle}>SaaS Dashboard</span>

                        <p style={projectCardDesc}>
                            <span>
                                SaaS Dashboard is a web-based overview for a software-as-a-service business.
                                It allows admins to manage users, track metrics, and input data for each user.
                            </span><br></br><br></br>

                            <span>
                                A custom "clicks" attribute records user interactions, such as ad clicks or engagement, which are stored per user.
                                The dashboard automatically updates metrics and graphs as data is added.
                            </span><br></br><br></br>

                            <span>
                                Admins can manage their current billing plan, track API usage, reports, and team members.
                                All changes are saved locally and reflected immediately.
                            </span><br></br><br></br>

                            <span>
                                If no data is available, the dashboard generates sample data to preview analytics, graphs, user stats,
                                billing, and a leaderboard. Once real data is entered, it saves the current generated preview and stops
                                any new random generated data from happening. Note all data is saved locally through the users cookies therefore
                                allowing faster refreshing/loading times however nothing will be saved long-term as I did not add any database to this project.
                            </span>
                        </p>

                        <Link to="https://github.com/Alexandru101/web-dev-projects/tree/main/SaaS%20Dashboard" className="about-project-card-link">Click Me</Link>
                    </div>

                    <div className="about-project-card">
                        <span style={projectCardTitle}>Other Projects</span>

                        <p style={projectCardDesc}>
                            <span>
                                I’ve listed my other mini projects through the link below.
                            </span><br></br><br></br>

                            <span>
                                These range from simple JavaScript scripts and HTML/CSS interfaces to full applications built with Express and Node.js.
                            </span><br></br><br></br>

                            <span>
                                Please note that by the time this website is published, I may have completed additional projects.
                                For the most up-to-date portfolio and full list of work, my GitHub is the best place to view everything I’ve created.
                            </span>
                        </p>

                        <Link to="https://github.com/Alexandru101/web-dev-projects" className="about-project-card-link">Click Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const contentTitle = {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: "15px",
    color: "yellow"
};

const textStyle1 = {
    fontSize: "17px",
    fontWeight: "bold"
};

const centerTextAdjust = {
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
};

const projectCardTitle = {
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "underline",
    fontFamily: "Akt"
};

const projectCardDesc = {
    fontSize: "13px",
    fontFamily: "Roboto"
};

export default About;
