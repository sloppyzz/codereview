window.console = window.console || { log: function () {} };

const _nowBrowser = ( ()=>{
    let agt = navigator.userAgent.toLowerCase();
    let trident = agt.match(/trident\/(\d.\d)/i);

    if( trident !== null ){
        if( trident[1] == "7.0" ) return "IE" + 11;
        if( trident[1] == "6.0" ) return "IE" + 10;
        if( trident[1] == "5.0" ) return "IE" + 9;
        if( trident[1] == "4.0" ) return "IE" + 8;
    }

    if( navigator.appName == 'Microsoft Internet Explorer' ) return "IE" + 7;

    if (agt.indexOf("edge") != -1) return 'Edge';
    if (agt.indexOf("chrome") != -1) return 'Chrome';
    if (agt.indexOf("opera") != -1) return 'Opera';
    if (agt.indexOf("staroffice") != -1) return 'Star Office';
    if (agt.indexOf("webtv") != -1) return 'WebTV';
    if (agt.indexOf("beonex") != -1) return 'Beonex';
    if (agt.indexOf("chimera") != -1) return 'Chimera';
    if (agt.indexOf("netpositive") != -1) return 'NetPositive';
    if (agt.indexOf("phoenix") != -1) return 'Phoenix';
    if (agt.indexOf("firefox") != -1) return 'Firefox';
    if (agt.indexOf("safari") != -1) return 'Safari';
    if (agt.indexOf("skipstone") != -1) return 'SkipStone';
    if (agt.indexOf("netscape") != -1) return 'Netscape';
    if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
})();

const _isMobile = (/(android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|NC Noob)/i.test(navigator.userAgent.toLowerCase()));

const _isVideoSupport = _nowBrowser!='IE7' && _nowBrowser!='IE8' && !_isMobile;

const _movExt = ( _nowBrowser=='Chrome' )? '.webm': '.mp4';

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}

class Utils{
    static get isMobile(){
        return _isMobile;
    }

    static get isVideoSupport(){
        return _isVideoSupport;
    }

    static get movExt(){
        return _movExt;
    }

    static get nowBrowser(){
        return _nowBrowser;
    }

    static setTrace ( depth ){
        try{ _trk_clickTrace( 'EVT', depth ); } catch(_e){}
    }

    static trim (_str) {
        return _str.replace(/^\s+/, "").replace(/\s+$/, "");
    }

    static randomNum (_max, _min) {
        let result = parseInt(Math.random() * (_max-_min+1));
        if(result===(_max-_min+1)) --result;
        result += _min;
        return result;
    }

    static cutStrByIndex (_str, _cutStringIndex, _cutAddStr = '...') {
        let tempStr = _str;
        if (_str.length > _cutStringIndex) tempStr = _str.substr(0, _cutStringIndex) + _cutAddStr;
        return tempStr;
    }

    static reEscape(_str) {
        return _str
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>' )
            .replace(/&quot;/g, '\"' )
            .replace(/&#39;/g, '\'' );
    }


    static setTrace ( depth ){
        // console.log('--', depth);
        try{
            _trk_clickTrace( 'EVT', depth );
        } catch(_e){
        }
    }

    static isPreventTime (diffTime, to = 1000){
        return (new Date().getTime() - diffTime) < to;
    }

    static getParamByName( name, url ) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

}



export default Utils;