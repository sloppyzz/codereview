import Common from './Common';

let singleton = null;
let singletonEnforcer = 'singletonEnforcer';

class WinResize{

    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton"
        }

        this.comm = Common.instance;
        this.callbackFnList = [];
    }

    static get instance() {
        if (!singleton) {
            singleton = new WinResize(singletonEnforcer);
        }
        return singleton;
    }

    init(){
        $(window).on( 'resize', (ev)=>{
            this.callbackFnList.forEach( _fn => _fn() );
        });
    }

    addCallback(_fn){
        this.callbackFnList.push(_fn);
    }

}

export default WinResize;
