const { Back } = window;
let clientX = -100;
let clientY = -100;
let innerCursor = document.getElementsByClassName('cursor--inner');
let outerCursor = document.getElementsByClassName('cursor--outer');
let heading = document.getElementsByClassName('section-about__heading');
let outerCursorBox = document.getElementById('cursor-outer').getBoundingClientRect();
let outerCursorSpeed = 0;
let showCursor = false;
let easing = Back.easeOut.config(1.7);

const initCursor = () => {
  const unveilCursor = () => {
    TweenMax.set(innerCursor, {
      x: clientX,
      y: clientY
    });
    TweenMax.set(outerCursor, {
      x: clientX - outerCursorBox.width / 2,
      y: clientY - outerCursorBox.height / 2
    });
    TweenMax.set(heading, { backgroundSize: `${clientX} ${clientY}` });
    setTimeout(() => {
      outerCursorSpeed = 0.2;
    }, 100);
    showCursor = true;
  };
  document.addEventListener("mousemove", unveilCursor);

  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  const render = () => {
    TweenMax.set(innerCursor, {
      x: clientX,
      y: clientY
    });
    if (!this.isStuck) {
      TweenMax.to(outerCursor, outerCursorSpeed, {
        x: clientX - outerCursorBox.width / 2,
        y: clientY - outerCursorBox.height / 2,
      });
    }
    if (showCursor) {
      document.removeEventListener("mousemove", unveilCursor);
    }
    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};

const initHovers = () => {
  const mainNavHoverTween = TweenMax.to(outerCursor, 0.3, {
    // backgroundColor: "#ffffff",
    ease: easing,
    paused: true
  });

  const mainNavMouseEnter = () => {
    outerCursorSpeed = 0;
    TweenMax.set(innerCursor, { opacity: 0 });
    mainNavHoverTween.play();
    innerCursor[0].classList.add("active");
    outerCursor[0].classList.add("active");
  };

  const mainNavMouseLeave = () => {
    outerCursorSpeed = 0.2;
    TweenMax.set(innerCursor, { opacity: 1 });
    mainNavHoverTween.reverse();
    innerCursor[0].classList.remove("active");
    outerCursor[0].classList.remove("active");
  };

  const mainNavLinks = document.querySelectorAll(".nav__list a");
  mainNavLinks.forEach(item => {
    item.addEventListener("mouseenter", mainNavMouseEnter);
    item.addEventListener("mouseleave", mainNavMouseLeave);
  });
};

initCursor();
initHovers();

var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});