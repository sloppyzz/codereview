import AbsSection from './AbsSection';

class SecPrize extends AbsSection{

    constructor( _scrollMagicCon) {
        super('#prize', _scrollMagicCon);
        this.animationSet();
    }

    animationIn(){
        this.con.addClass('anime');

        TweenMax.to( '#prize .rank1', 0.6, {scale:1, opacity:1, ease:Quint.easeOut, delay: 0.1});
        TweenMax.to( '#prize .rank2', 0.6, {scale:1, opacity:1, ease:Quint.easeOut, delay: 0.2});
        TweenMax.to( '#prize .rank3', 0.6, {scale:1, opacity:1, ease:Quint.easeOut, delay: 0.3});
        TweenMax.to( '#prize .rank4', 0.6, {scale:1, opacity:1, ease:Quint.easeOut, delay: 0.4});
    }

    animationOut(){
        this.con.removeClass('anime');

        TweenMax.to( '#prize .rank1', 0.3, {scale:0.5, opacity:0} );
        TweenMax.to( '#prize .rank2', 0.3, {scale:0.5, opacity:0} );
        TweenMax.to( '#prize .rank3', 0.3, {scale:0.5, opacity:0} );
        TweenMax.to( '#prize .rank4', 0.3, {scale:0.5, opacity:0} );
    }

    animationSet(){
        TweenMax.set( '#prize .rank1', {scale:0.5, opacity:0} );
        TweenMax.set( '#prize .rank2', {scale:0.5, opacity:0} );
        TweenMax.set( '#prize .rank3', {scale:0.5, opacity:0} );
        TweenMax.set( '#prize .rank4', {scale:0.5, opacity:0} );
    }

}

export default SecPrize;