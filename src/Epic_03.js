import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Epic_03.css';

function App(){
    const settings ={
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dragable: true,
    };
    return(
        <div>
            <BrowserView>
                <div className="Browser-MainTitle">
                    개발
                </div>
                <div className="Browser-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_1_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic2.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic3.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic4.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Browser-TextLine">
                    React.js로 제작하여 프론트엔드 영역만으로 구현된 포트폴리오 사이트입니다.
                    <br/>
                    <br/>
                    Github-pages를 이용하여 사이트 배포를 진행하고 react-router, react-bottom-drawer등의 라이브러리를 이용하여
                    디자이너가 제공한 다양한 구조들을 구현했습니다.
                    <br/>
                    <br/>
                    또한, 모바일 뷰를 기준으로 한 페이지 디자인을 구현하면서도 각각의 환경에서 모든 유저에게 같은 유저 경험(UX)을 제공할 수 있게
                    적응형 웹으로 제작하였습니다.
                </div>
                <div className="Browser-SplitLine"/>
                <div className="Browser-MainTitle">
                    기획
                </div>
                <div className="Browser-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_2_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_2_pics/pic2.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Browser-TextLine">
                    개발자, 디자이너 두명으로만 시작된 프로젝트로, 각 인원이 기획의 영역을 모두 수행하며 프로젝트를 진행하였습니다.
                    <br/>
                    <br/>
                    우선 각각 만들고 싶은 프로덕트와 그 프로덕트를 통해 전달하려는 가치에 대한 브레인 스토밍 회의를 진행하였고,
                    회의 결과 저희가 누구인지와 앞으로 어떤 비전을 바라보는지를 전달하고자 하여 포트폴리오 사이트를 제작하게 되었습니다.
                    <br/>
                    <br/>
                    앞서 말한 가치를 전달할 프로덕트 제작 과정을 구체화 할 도구로 애자일 프로세스 기법을 사용하였습니다.
                    <br/>
                    <br/>
                    설정한 가치를 작은 목표들로 나누어낸 후 각각의 목표를 하나의 에픽으로 설정하였고, 
                    에픽별로 주고자 하는 가치들을 어떻게 사용자에게 전달할지를 담은 스토리를 설정하였습니다.
                    마지막으로는 만들어진 스토리들을 어떻게 구현해낼지 단계별로 짜내 태스크를 완성하였습니다.
                    <br/>
                    <br/>
                    위의 과정들을 완성해나가며 기획의 과정이 쉽지 않음을 깨닳았고,
                    프로젝트를 진행해가며 잘 짜여진 기획서가 프로젝트 완료를 위해 얼마나 중요한 것인지 알 수 있었습니다.
                </div>
            </BrowserView>
            <MobileView>
                <div className="Mobile-MainTitle">
                    디자인
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_1_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic2.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic3.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic4.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-TextLine">
                    React.js로 제작하여 프론트엔드 영역만으로 구현된 포트폴리오 사이트입니다.
                    <br/>
                    <br/>
                    Github-pages를 이용하여 사이트 배포를 진행하고 react-router, react-bottom-drawer등의 라이브러리를 이용하여
                    디자이너가 제공한 다양한 구조들을 구현했습니다.
                    <br/>
                    <br/>
                    또한, 모바일 뷰를 기준으로 한 페이지 디자인을 구현하면서도 각각의 환경에서 모든 유저에게 같은 유저 경험(UX)을 제공할 수 있게
                    적응형 웹으로 제작하였습니다.
                </div>
                <div className="Mobile-SplitLine"/>
                <div className="Mobile-MainTitle">
                    기획
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_2_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_2_pics/pic2.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-TextLine">
                    개발자, 디자이너 두명으로만 시작된 프로젝트로, 각 인원이 기획의 영역을 모두 수행하며 프로젝트를 진행하였습니다.
                    <br/>
                    <br/>
                    우선 각각 만들고 싶은 프로덕트와 그 프로덕트를 통해 전달하려는 가치에 대한 브레인 스토밍 회의를 진행하였고,
                    회의 결과 저희가 누구인지와 앞으로 어떤 비전을 바라보는지를 전달하고자 하여 포트폴리오 사이트를 제작하게 되었습니다.
                    <br/>
                    <br/>
                    앞서 말한 가치를 전달할 프로덕트 제작 과정을 구체화 할 도구로 애자일 프로세스 기법을 사용하였습니다.
                    <br/>
                    <br/>
                    설정한 가치를 작은 목표들로 나누어낸 후 각각의 목표를 하나의 에픽으로 설정하였고, 
                    에픽별로 주고자 하는 가치들을 어떻게 사용자에게 전달할지를 담은 스토리를 설정하였습니다.
                    마지막으로는 만들어진 스토리들을 어떻게 구현해낼지 단계별로 짜내 태스크를 완성하였습니다.
                    <br/>
                    <br/>
                    위의 과정들을 완성해나가며 기획의 과정이 쉽지 않음을 깨닳았고,
                    프로젝트를 진행해가며 잘 짜여진 기획서가 프로젝트 완료를 위해 얼마나 중요한 것인지 알 수 있었습니다.
                </div>
            </MobileView>
        </div>
    );
}
export default App;