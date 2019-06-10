"use strict";
/**
 * Simple frame. If we set flag (async or defer) in page can load without frames. But async don't work in Chrome
 *
 * @return nothing
 * */
alert("Hello");

/**
 * Frame allows enter data and send to server.
 * */
prompt("How are you?", "I'm fine");

/**
 * Alert the user of something and ask to confirm his actions
 * */
confirm("Are you sure?");
