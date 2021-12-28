import React, { useState } from "react";
import "./styles/StyleSheet1.css";
// import AnimateCC from "react-adobe-animate";

const App = () => {
  // const [paused, setPaused] = useState(false);
  // const [, setAnimationObject] = useState(null);
  // const getAnimationObject = (obj) => setAnimationObject(obj);
  // const onClick = () => setPaused(!paused);

  return (
    // <div style={{ width: "400px" }}>
    //   <AnimateCC
    //     animationName="TeddyBearMachine_YardenTamir_AmitMiller_Jso"
    //     getAnimationObject={getAnimationObject}
    //     // paused={paused}
    //   />

    //   <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button>
    // </div>
    <form id="form1">
      <header>
        <a href="login.aspx">
          <img id="logo" src="images/GameIcon.png" alt="fg" />
          <p>מכונת הדובונים</p>
        </a>
        <nav>
          <ul>
            <li>
              <a className="about">אודות</a>
            </li>
            <li>
              <a href="CeateGames.aspx">לעורך</a>
            </li>
            <li>
              <a className="howToPlay">איך משחקים?</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="aboutDiv" className="popUp bounceInDown hide">
        <a className="closeAbout">X</a>
        <h1>אודות</h1>
        <img id="about1" src="images/GameIcon.png" />
        <div id="meUpAbout">
          <h2>מכונת הדובונים</h2>
          <h3>אפיון ופיתוח: עמית מילר וירדן טמיר</h3>
          <p>
            אופיין ופותח במסגרת פרויקט בקורסים:
            <br />
            סביבות לימוד אינטראקטיביות 2 + תכנות 2 + תכנות אינטראקטיבי 2 תשע"ט
          </p>
          <p>
            <a href="https://www.hit.ac.il/telem/overview">
              הפקולטה לטכנולוגיות למידה
            </a>
          </p>
          <p>מכון טכנולוגי חולון</p>
          <p>סאונד משחק: Benjamin Mastripolito </p>
          <img src="images/hitlogo.jpg" />
        </div>
      </div>
      <div id="howToPlayDiv" className="popUp bounceInDown hide">
        <a className="closeHowToPlay floatright">X</a>
        <video
          id="gameIframe"
          src="video/WhatsApp%20Video%202019-07-25%20at%2020.14.10.mp4"
          controls="controls"
          width="900"
          height="500"
        />
      </div>
      <div id="DivGame">
        <iframe
          id="game"
          src="TeddyBearMachine_YardenTamir_AmitMiller_Jso.html"
          title="he"
        ></iframe>
      </div>
    </form>
  );
};

export default App;
