import AbsSection from './AbsSection';

class SecVisual extends AbsSection{

    constructor( _scrollMagicCon) {
        super('#visual', _scrollMagicCon);
        this.destAniObj = {x:0, y:0, opacity:1, ease:Quint.easeOut, delay: 0.3};
        this.animationSet();
    }

    animationIn(){
        this.con.addClass('anime');

        TweenMax.to( '#visual .visual-title', 0.6, {scale:1, opacity:1, ease:Quint.easeOut});

        TweenMax.to( '#visual .bg-character.character1', 0.85, this.destAniObj);
        TweenMax.to( '#visual .bg-character.character2', 0.6, this.destAniObj);
        TweenMax.to( '#visual .bg-character.character3', 0.45, this.destAniObj);

        TweenMax.to( '#visual .bg-character.character4', 0.85, this.destAniObj);
        TweenMax.to( '#visual .bg-character.character5', 0.6, this.destAniObj);
        TweenMax.to( '#visual .bg-character.character6', 0.45, this.destAniObj);
    }

    animationOut(){
        this.con.removeClass('anime');

        TweenMax.to( '#visual .visual-title', 0.3, {scale: 0.3, opacity:0} );

        TweenMax.to( '#visual .bg-character.character1', 0.3, {x:-400, y:0, opacity:0} );
        TweenMax.to( '#visual .bg-character.character2', 0.3, {x:-300, y:0, opacity:0} );
        TweenMax.to( '#visual .bg-character.character3', 0.3, {x:-200, y:-100, opacity:0} );

        TweenMax.to( '#visual .bg-character.character4', 0.3, {x:400, y:0, opacity:0} );
        TweenMax.to( '#visual .bg-character.character5', 0.3, {x:300, y:0, opacity:0} );
        TweenMax.to( '#visual .bg-character.character6', 0.3, {x:200, y:-100, opacity:0} );
    }


    animationSet(){
        TweenMax.set( '#visual .visual-title', {scale: 0.5, opacity:0} );

        TweenMax.set( '#visual .bg-character.character1', {x:-400, y:0, opacity:0} );
        TweenMax.set( '#visual .bg-character.character2', {x:-300, y:0, opacity:0} );
        TweenMax.set( '#visual .bg-character.character3', {x:-200, y:-200, opacity:0} );

        TweenMax.set( '#visual .bg-character.character4', {x:400, y:0, opacity:0} );
        TweenMax.set( '#visual .bg-character.character5', {x:300, y:0, opacity:0} );
        TweenMax.set( '#visual .bg-character.character6', {x:200, y:-200, opacity:0} );
    }


}

export default SecVisual;