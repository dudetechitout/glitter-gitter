// ==UserScript==
// @name         Glitter Gitter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open their Free Code Camp profile, instead of Github.
// @author       navegacion
// @match        https://gitter.im/*
// @grant        none
// ==/UserScript==

if(typeof jQuery === 'undefined'|| !jQuery){
    (function(){
        var s=document.createElement('script');
        s.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js');
        if(typeof jQuery=='undefined'){
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    })();
}

(function(){
    var readd = function() {
        $( "div.chat-item__details" ).each(function( index ) {
            var $this = $(this);
            $this.children("div.chat-item__from.js-chat-item-from").each(function() {
                var name = $(this);
                var username = $this.children("div.chat-item__username.js-chat-item-from");
                var profile = $this.children("div#profile");
                var url = "http://freecodecamp.com/";

                var profile_one = '<span id="first"><a href="' + url + username.html().substr(1) + '" target="_blank"><img style="width:20px;" src="http://i.imgur.com/ZvExY7I.png"></a></span>';
                var profile_two = '<span id="second"><a href="' + url + name.html() + '" target="_blank"><img style="width:20px;" src="http://i.imgur.com/vjBpVgj.png"></a></span>';
                var profile_display = profile_one + ' ' + profile_two;
                
                if(!profile.length) {
                    username.after('<div id="profile" style="padding:5px;width:8%;margin: 0 auto;">' + profile_display + '</div>');
                }
            });
        });
    };

    var intervalInt = window.setInterval(function(){
        if(typeof jQuery !== 'undefined' && jQuery){
            readd();
        }
    }, 850);
})();