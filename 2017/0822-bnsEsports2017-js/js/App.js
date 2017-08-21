import Common from './Common';
import WinResize from './WinResize';
import Intro from './SecIntro';
import Visual from './SecVisual';
import Guide from './SecGuide';
import Method from './SecMethod';
import Schedule from './SecSchedule';
import Prize from './SecPrize';
import Channel from './SecChannel';

class App{
    constructor(){
        this.com = Common.instance;
        this.winRe = WinResize.instance;
    }

    init(_option) {
        this.com.init(_option);
        this.winRe.init();

        let scrollMagicCon = new ScrollMagic.Controller();

        new Intro( scrollMagicCon );
        new Visual( scrollMagicCon );
        new Guide ( scrollMagicCon );
        new Method ( scrollMagicCon );
        new Schedule ( scrollMagicCon );
        new Prize ( scrollMagicCon );
        new Channel ( scrollMagicCon );
    }

}

window.championshipApp = new App();