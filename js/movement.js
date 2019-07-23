var tl = new TimelineMax();

tl.from('.ag-tagline', 0.5, {y:'60', opacity: 0, ease: Power1.easeOut});
tl.from('h2', 0.8, {x:'40', opacity: 0, ease: Power1.easeOut});
tl.from('h2 p', 1, {x:'40', opacity: 0, ease: Power1.easeOut});
tl.from('.info', 1.3, {x:'40', opacity: 0, ease: Power1.easeOut});
tl.from('#social', 1.5, {y:'40', opacity: 0, ease: Power1.easeOut});
// tl.from('.bg-img', 1.5, {x:'80', opacity: 0, ease: Power1.easeOut});

tl.from('.bg-img', 1.7, {x: '-20', opacity: 1, ease: Power4.easeOut}, '-=1');
tl.from('.header-copanyname', 2, {y:'20', opacity: 0, ease: Power1.easeOut});

tl.from('.ag-tagline', 0.5, {y:'60', opacity: 0, ease: Power1.easeOut});
