// ==UserScript==
// @name         2nd Gen Reddit UI
// @namespace    
// @version      1.0.0
// @description  Reverts Reddit to 2nd Generation UI (new.reddit.com)
// @author       sidetime
// @license MIT
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_addStyle
// @run-at       document-start

// ==/UserScript==

//------GENERAL------

//Remove Media Borders
GM_addStyle('.relative {border-radius: 0px !important;}');
GM_addStyle('.border-solid {border-radius: 0px !important;}');
//Site Background-color
GM_addStyle(':root.theme-beta {background-color: #030303 !important;}');
//Post Background-color
GM_addStyle('.bg-neutral-background {background-color: #1a1a1b !important; border-width: .25rem !important}');
//Hide left sidebar
GM_addStyle('#left-sidebar-container {display: none !important;}');

//------HOME PAGE------

//Filterbar
GM_addStyle('.my-xs {background-color: #1a1a1b !important; border-style: solid !important; border-color: #343636 !important; border-width: 0.05rem !important; border-radius: .25rem !important; margin-left: 0px !important; margin-right: 0px !important; padding-top: .25rem !important; padding-bottom: .25rem !important;');


//------SUBREDDIT------

//Subreddit Filterbar
GM_addStyle('.my-2xs {margin-top: 0.5rem !important; margin-bottom: .5rem !important; border-color: #343536 !important; border-width: 0.05rem !important; border-style: solid !important; border-radius: .25rem !important;}');
//Subreddit Banner Background-color
GM_addStyle('.masthead {background-color: #1a1a1b !important; padding-bottom: 1rem !important;}');
//Right Sidebar
GM_addStyle('.bg-neutral-background-weak {background-color: #1a1a1b !important;}');
//Hightlight Background-color
GM_addStyle(':root:not(.theme-light) .theme-rpl {--color-neutral-background: #1a1a1b !important;}');

//GM_addStyle('.bg-neutral-background-weak {background-color: #1a1a1b !important;}');
//GM_addStyle('#form {background-color: #ae2c00 !important; border-style: solid !important; border-width: .1rem !important; border-color: #343636 !important; border-radius: 3px !important;}');


(function() {
    'use strict';
    // Your code here...
})();
