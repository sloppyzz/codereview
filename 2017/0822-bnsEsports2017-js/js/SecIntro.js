import AbsSection from './AbsSection';

class SecIntro extends AbsSection{

    constructor( _scrollMagicCon) {
        super('#intro', _scrollMagicCon);

        this.tmplList = [ this.templStatus1, this.templStatus2, this.templStatus3 ];
        this.setSlick();
        this.loadData('');
        this.addEvents();
    }

    loadData(_countryCode){
        let request = $.ajax({ url: this.com.apiUrl(_countryCode) , dataType: "jsonp", type: "GET", jsonpCallback: "callback" });
        request.done( _d => this.resetTemplate(_d) );
    }

    addEvents(){
        $('.section-intro .select-country select').on('change', (e) => this.loadData($('.section-intro .select-country select').val()) );
    }

    resetTemplate(_d){
        if(!_d.matchs) return;

        this.slickObj.removeSlide( 0, false, true);
        let liveNum = 0;

        for(let i=0; i<_d.matchs.length; i++){
            let item = _d.matchs[i];
            let tmplFN = this.tmplList[item.status-1];
            this.slickObj.addSlide( tmplFN(item) );
            if(item.status===2) liveNum = i;
        }

        this.slickObj.setPosition();

        setTimeout(()=> this.slickObj.goTo(liveNum), 500);

        TweenMax.fromTo('.wrap-card', 0.5, {y:150, opacity: 0}, {y:0, opacity: 1, ease: Quint.easeOut});
    }

    setSlick(){
        jQuery('.wrap-card').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 200,
            cssEase: 'ease-out',
            responsive: [
                {
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });

        this.slickObj = jQuery('.wrap-card').slick('getSlick');
    }


    templStatus1(_d){
        return `
            <div class="card-list">
                <div class="card-header">
                    <div class="country">${_d.countryName}</div>
                    <div class="title">${_d.type}</div>
                    <div class="date"><em>${_d.standardTime}</em> ${_d.startDate}</div>
                </div>
                <div class="card-contents">
                    <div class="state">Coming Soon</div>
                </div>
            </div>`;
    }

    templStatus2(_d){
        return `
            <div class="card-list">
                <div class="card-header is-active">
                    <span class="onair">LIVE</span>
                    <div class="country">${_d.countryName}</div>
                    <div class="title">${_d.type}</div>
                    <div class="btn-lang">
                        <a href="${_d.localLiveUrl}" target="_blank">${_d.localBtnTitle}</a>
                        <a href="${_d.commonLiveUrl}" target="_blank">${_d.commonBtnTitle}</a>
                    </div>
                </div>
                <div class="card-contents">
                    <div class="state">Playing Now</div>
                </div>
            </div>`;
    }

    templStatus3(_d){



        let teamsList = _d.teams.map( item => {
            let isTopSeed = (item.result===1 && (_d.countryName ==='China' || _d.countryName ==='South Korea'))? `[TOP SEED] `:'';

            return `
                <li>
                    <span class="teams-rank">${item.result}</span>
                    <div class="teams-name">${isTopSeed}${item.name}</div>
                    <div class="teams-members">${item.members.map(mem => `<p>${mem.commonName}</p>`).join('')}</div>
                </li>`;
        }).join('');

        return `
            <div class="card-list">
                <div class="card-header">
                    <div class="country">${_d.countryName}</div>
                    <div class="title">${_d.type}</div>
                    <div class="btn-lang">
                        <a href="${_d.localVodUrl}" target="_blank">${_d.localBtnTitle}</a>
                        <a href="${_d.commonVodUrl}" target="_blank">${_d.commonBtnTitle}</a>
                    </div>
                </div>
                <div class="card-contents">
                    <ul class="teams">${teamsList}</ul>
                </div>
            </div>`;
    }


}

export default SecIntro;