import Common from './Common';
import WinResize from './WinResize';

class AbsSection{

    constructor( _containerID, _scrollMagicCon) {
        this.com = Common.instance;
        this.winRe = WinResize.instance;
        this.myID = _containerID;
        this.con = $( _containerID );

        this.sc = new ScrollMagic.Scene({triggerElement: this.myID, offset: -200, duration: this.con.height()+500});
        this.sc.addTo(_scrollMagicCon);

        this.sc.on("enter leave", (event)=> {
            if(event.type==='enter') this.animationIn();
            if(event.type==='leave') this.animationOut();
        });

        this.winRe.addCallback( () => this.winResize() );
    }

    animationIn(){
        this.con.addClass('anime');
    }

    animationOut(){
        this.con.removeClass('anime');
    }

    winResize(){
        this.sc['duration'](this.con.height()+500);
    }
}

export default AbsSection;