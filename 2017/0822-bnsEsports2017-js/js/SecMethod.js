import AbsSection from './AbsSection';

class SecMethod extends AbsSection{

    constructor( _scrollMagicCon) {
        super('#method', _scrollMagicCon);
        this.animationSet();
    }

    animationIn(){
        this.con.addClass('anime');
        TweenMax.to( '#method .method-img', 0.75, {scale:1, opacity:1, ease:Quint.easeOut, delay: 0.1});
    }

    animationOut(){
        this.con.removeClass('anime');
        TweenMax.to( '#method .method-img', 0.3, {scale:0.75, opacity:0} );
    }

    animationSet(){
        TweenMax.set( '#method .method-img', {scale:0.75, opacity:0} );
    }

}

export default SecMethod;