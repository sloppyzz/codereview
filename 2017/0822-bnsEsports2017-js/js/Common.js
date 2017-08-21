
let singleton = null;
let singletonEnforcer = 'singletonEnforcer';

class Common {

    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot--construct singleton"
        }
    }

    static get instance() {
        if (!singleton) {
            singleton = new Common(singletonEnforcer);
        }
        return singleton;
    }

    init(_option){
        this.__isMobileDe = (/(iPhone|iPod|iPad|Android|NC Noob)/i.test(navigator.userAgent));
        this.__env = location.href.match(/(rc\.|rc\-)/i)? location.href.match(/(rc\.|rc\-)/i)[1]: 'live';
        this.__env = (/opdev\./i.test(location.href))? 'opdev': this.__env;
        this.__env = (/local\.|localhost|ui-static\.|file:/i.test(location.href))? 'local': this.__env;
        this.__apiUrl = _option.apiURL;
        this.__staticHost = _option.staticURL;
    }

    apiUrl(_val){
        _val = !_val? 'south_korea': _val;
        if(this.__env === 'local' || this.__env === 'opdev' ){
            return `http://opdev.bns.plaync.com/esports/wc/match/2017-wc-match-list/${_val}/list`;
        }
        return '/esports/wc/match/2017-wc-match-list/'+_val+'/list';
    }

    get isMobile(){
        return this.__isMobileDe;
    }

    get staticURL(){
        return this.__staticHost;
    }

    get env(){
        return this.__env;
    }



}

export default Common;