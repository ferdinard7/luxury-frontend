import "./team.css";


function Team() {
    return (
        <div className="team-container">
            <h2 className="team-heading"> Meet The Team</h2>
            <hr className="team-h-1" />
            <hr className="team-h" />
            <div className="team-wrapper">
                <div>
                    <img src="/images/img1.jpg" alt="icon1" />
                    <h3> Eng. Samuel Eze</h3>
                    <p>
                        Chief Executive Officer
                    </p>
                </div>
                <div>
                    <img src="/images/img4.jpg" alt="icon1" />
                    <h3> Ikechukwu Otutu</h3>
                    <p>
                        Chief Financial Officer
                    </p>
                </div>
                <div>
                    <img src="/images/img3.jpg" alt="icon1" />
                    <h3> Eng. Victor Emmanuel</h3>
                    <p>
                        Chief Operation Officer
                    </p>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="icon1" />
                    <h3> Joy Ali</h3>
                    <p>
                        Chief Marketing Officer
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Team;