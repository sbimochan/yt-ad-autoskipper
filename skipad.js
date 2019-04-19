;(function() {

  /**
   * This function checks if the current page has a skip ad button
   * available yet. If it has the button, a click event is fired on
   * the button. If no such button is found, or if the current page
   * is not a video page (/watch), then we do nothing.
   * The interval period of 2 seconds is arbitary, but I guess 2sec
   * is a good choice.
   */
  var timeout = setInterval(function() {
    if (window.location.pathname !== '/watch') {
      return;
    }
    var isMuted = false;
    var muteButton = document.querySelector('button.ytp-mute-button');
    var skipButton = document.querySelector('button.ytp-ad-skip-button');
    if (skipButton) {
      eventFire(skipButton, 'click');
      if (isMuted === false) {
        eventFire(muteButton, 'click');
        isMuted = true;
      }
    } else {
      // If video was skipped, unmute it
      isMuted = false;
    }
  }, 2000);

	/**
   * Got this function from:
	 * http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
	 */
  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

})();

