import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

window.onload = function(){

    new Typed('.identify', {
    strings: ['高中生','開發者','程式貓團隊成員','機器人校隊隊長'],
    typeSpeed: 60,
    backSpeed: 40,
    smartBackspace: true,
    showCursor:false,
    loop: true,
    loopCount: Infinity
    });
}