export const configParticlesHome = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: false,
        value_area: 3500,
      },
    },
    color: {
      value: "#2e42a2",
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#293355",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5997522076405273,
      random: true,
      anim: {
        enable: false,
        speed: 0.3996003996003996,
        opacity_min: 0.1918081918081918,
        sync: false,
      },
    },
    size: {
      value: 1.3,
      random: true,
      anim: {
        enable: false,
        speed: 25,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 360,
      color: "#2e42a2",
      opacity: 0.5997522076405273,
      width: 0,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "bottom",
      random: false,
      straight: true,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 1500,
        rotateY: 1500,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
        
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
};

export const settingsCarousel_sistemas = {
  type: "carousel",
  startAt: 0,
  autoplay: false,
  hoverpause: true,
  focusAt: "center",
  perView: 5,

  gap: 30,
  breakpoints: {
    600: {
      perView: 1,
    },
    1024: {
      perView: 2,
    },
  },
};

export const settingsCarousel_noticias = {
  type: "carousel",
  startAt: 0,
  autoplay: 5500,
  hoverpause: true,
  perView: 3,
  animationDuration: 800,
  animationTimingFunc: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
  gap: 50,
  breakpoints: {
    600: {
      perView: 1,
    },
    1024: {
      perView: 2,
    },
  },
};
