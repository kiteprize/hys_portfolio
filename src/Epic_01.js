import React, {Component, useEffect } from 'react';
import ReactTextTransition from "react-text-transition";
import {BrowserView, MobileView} from 'react-device-detect'
import './Epic_01.css';

const texts = ["풀스택 개발자가 되고싶은 ", "기획과 개발을 동시에 배우고있는 ", "웹 개발자의 첫 걸음을 떼고있는 "];

class IntroduceLine extends Component{
    state = {
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0,
        customIndex: 0
    };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
            textFastIndex: this.state.textFastIndex + 1
            });
        }, 3000);
    }    

    render(){
        return(
            <React.Fragment>
                <ReactTextTransition direction="up" style={{justifyContent : "center", alignItems : "center"}} inline>
                    {texts[this.state.textFastIndex % texts.length]}
                </ReactTextTransition>
            </React.Fragment>
        );
    }
}

function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);
  });
  return (
    <div className="App">
      <BrowserView>
        <div className="App-header">
          <IntroduceLine/>
            <div className="Underline"></div>
          개발자 황연상 입니다.
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile-App-header">
          <IntroduceLine/>
            <div className="Underline"></div>
          개발자 황연상 입니다.
        </div>
      </MobileView>
    </div>
  );
}

export default App;
