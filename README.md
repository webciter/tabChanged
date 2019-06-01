# tabChanged
An extention to the window object to detect focus and blur

<h2>Events</h2>

<h3>TabFocus</h3>

This event is triggered when a tab has been given focus from a blur.

<pre>
window.addEventListener("TabFocus", function(){
    console.info("event test tab focus");
});
</pre>

<h3>TabBlur</h3>

This event is triggered when a tab has been given blur from a focus.

<pre>
window.addEventListener("TabBlur", function(){
    console.info("event test tab blur");
});
</pre>

