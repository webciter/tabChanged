/* 
 * tabChanged
 * 
 * @version 1.0.0
 * @author David Clews
 * @authorUrl http://davidclews.com
 * @repoUrl http://github.com/webciter/tabChanged
 */

(function(){
    
    window.hasFocus = null;
            
    let a, 
        b, 
        c = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
    };
    for (a in c) {
        if (a in document) {
            b = c[a];
            break;
        }
    }
    
    /* add the events to the window object */
    let d = new Event("TabFocus"),
        e = new Event("TabBlur");
    
    if(typeof b !== "undefined"){
        setInterval(function(){

            if(!document[a]){
                if(window.hasFocus !== true){
                    window.hasFocus = true;
                    window.dispatchEvent(d);
                }
            }else{
                if(window.hasFocus !== false){
                    window.hasFocus = false;
                    window.dispatchEvent(e);
                }
            }
        },100);
    }    
    
})();
