import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My projects <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Expense Tracker</h4>
                <h5>Chitkara University</h5>
              </div>
              <h3>Sep 2024</h3>
            </div>
            <p>
            Designed and developed a responsive expense tracking website using basic HTML, CSS and Javascript. 
            Implemented features for adding, viewing, and categorizing transactions to help users monitor their personal finances effectively.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Interview.io</h4>
                <h5>BharatTech 2.O</h5>
              </div>
              <h3>Feb 2025</h3>
            </div>
            <p>
            Led the creation of an AI-powered interview platform using React, Node.js, and Gemini API.
            Integrated real-time video simulations and adaptive quizzes for personalized interview prep.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>TrackHub</h4>
                <h5>Chitkara University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Currently building a decentralized lost and found system using blockchain technology.
            Working with Solidity smart contracts and secure item tracking mechanisms to ensure transparency and reliability in item recovery across campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
