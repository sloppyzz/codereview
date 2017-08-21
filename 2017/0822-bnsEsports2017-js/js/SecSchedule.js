import AbsSection from './AbsSection';

class SecSchedule extends AbsSection{

    constructor( _scrollMagicCon) {
        super('#schedule', _scrollMagicCon);
        this.animationSet();


        let sc1 = new ScrollMagic.Scene({
            triggerElement: '.wrap-schedule-info.round16 .schedule-info',
            offset: -200,
            duration: $('.wrap-schedule-info.round16 .schedule-info').height()+1000
        });
        sc1.addTo(_scrollMagicCon);
        sc1.on("enter leave", (event)=> {
            if(event.type==='enter') {
                TweenMax.to( '.wrap-schedule-info.round16 .schedule-info', 0.75, {scale:1, opacity:1, ease:Quint.easeOut});
            }
            if(event.type==='leave') {
                // TweenMax.to( '.wrap-schedule-info.round16 .schedule-info', 0.3, {scale:0.75, opacity:0} );
            }
        });


        let sc2 = new ScrollMagic.Scene({
            triggerElement: '.wrap-schedule-info.round8 .schedule-info',
            offset: -200,
            duration: $('.wrap-schedule-info.round8 .schedule-info').height()+1000
        });
        sc2.addTo(_scrollMagicCon);
        sc2.on("enter leave", (event)=> {
            if(event.type==='enter') {
                TweenMax.to( '.wrap-schedule-info.round8 .schedule-info', 0.75, {scale:1, opacity:1, ease:Quint.easeOut});
            }
            if(event.type==='leave') {
                // TweenMax.to( '.wrap-schedule-info.round8 .schedule-info', 0.3, {scale:0.75, opacity:0} );
            }
        });


        let sc3 = new ScrollMagic.Scene({
            triggerElement: '.wrap-schedule-info.round4 .schedule-info',
            offset: -200,
            duration: $('.wrap-schedule-info.round4 .schedule-info').height()+1000
        });
        sc3.addTo(_scrollMagicCon);
        sc3.on("enter leave", (event)=> {
            if(event.type==='enter') {
                TweenMax.to( '.wrap-schedule-info.round4 .schedule-info', 0.75, {scale:1, opacity:1, ease:Quint.easeOut});
            }
            if(event.type==='leave') {
                // TweenMax.to( '.wrap-schedule-info.round4 .schedule-info', 0.3, {scale:0.75, opacity:0} );
            }
        });


        let sc4 = new ScrollMagic.Scene({
            triggerElement: '.wrap-schedule-info.final .schedule-info',
            offset: -200,
            duration: $('.wrap-schedule-info.final .schedule-info').height()+1000
        });
        sc4.addTo(_scrollMagicCon);
        sc4.on("enter leave", (event)=> {
            if(event.type==='enter') {
                TweenMax.to( '.wrap-schedule-info.final .schedule-info', 0.75, {scale:1, opacity:1, ease:Quint.easeOut});
            }
            if(event.type==='leave') {
                // TweenMax.to( '.wrap-schedule-info.final .schedule-info', 0.3, {scale:0.75, opacity:0} );
            }
        });

    }


    animationSet(){
        TweenMax.set( '.wrap-schedule-info.round16 .schedule-info', {scale:0.5, opacity:0} );
        TweenMax.set( '.wrap-schedule-info.round8 .schedule-info', {scale:0.5, opacity:0} );
        TweenMax.set( '.wrap-schedule-info.round4 .schedule-info', {scale:0.5, opacity:0} );
        TweenMax.set( '.wrap-schedule-info.final .schedule-info', {scale:0.5, opacity:0} );
    }


}

export default SecSchedule;