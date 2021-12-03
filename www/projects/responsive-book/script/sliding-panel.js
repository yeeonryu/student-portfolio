// object that holds scope for SlidingPanel data
var SlidingPanel = {
	isOpen: false,
	panelElem: null,
	buttonElem: null
};

// toggles the panel open or close by applying or removing class `.panel-open`
SlidingPanel.toggle = function() {
	//console.log('togglePanel', SlidingPanel.isOpen);
	SlidingPanel.panelElem.classList.toggle('panel-open');
	SlidingPanel.buttonElem.classList.toggle('panel-open');

	SlidingPanel.isOpen = !SlidingPanel.isOpen;  // flip the boolean value
};

// sets up persistent SlidingPanel data, onclick handlers, etc.
SlidingPanel.setup = function() {
	SlidingPanel.panelElem = document.getElementById('sliding-panel');
	SlidingPanel.buttonElem = document.getElementById('panel-button');

	document.addEventListener("click", function(ev){
		//console.log('body click =>', ev);
		if (SlidingPanel.isOpen)
			SlidingPanel.toggle();
	});

	SlidingPanel.panelElem.onclick = function(ev){
		//console.log('panel click =>', ev);
		// stop "bubbling up" of onclick events
		// so the <body> onclick handler is not fired
		ev.stopPropagation();
	};

	SlidingPanel.buttonElem.onclick = function(ev){
		//console.log('button click =>', ev, SlidingPanel.isOpen);
		// stop "bubbling up" of onclick events
		// so that other lower level onclick handlers are not fired
		SlidingPanel.toggle();
		ev.stopPropagation();
	};

	// clicking on links in the panel, closes the panel
	SlidingPanel.panelElem.querySelectorAll("li > a").forEach(function(elem) {
		elem.onclick = function(ev){
			//console.log('a click =>', ev);
			// stop "bubbling up" of onclick events
			if (SlidingPanel.isOpen)
				SlidingPanel.toggle();
			ev.stopPropagation();
		};
	});
};

// setup after document loaded
document.addEventListener('DOMContentLoaded', () => SlidingPanel.setup());
