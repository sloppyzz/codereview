import AbsSection from './AbsSection';

class SecGuide extends AbsSection{

    constructor( _scrollMagicCon) {
        super('#guide', _scrollMagicCon);
        this.animationSet();
    }

    animationIn(){
        this.con.addClass('anime');
        TweenMax.to( '#guide .bg-character', 1, {x:0, opacity:1, ease:Quint.easeOut});
    }

    animationOut(){
        this.con.removeClass('anime');
        TweenMax.to( '#guide .bg-character', 0.3, {x: 200, opacity:0} );
    }


    animationSet(){
        TweenMax.set( '#guide .bg-character', {x: 200, opacity:0} );
    }


}

export default SecGuide;