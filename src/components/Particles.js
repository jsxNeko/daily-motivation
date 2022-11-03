// This is what appears above the background color
// Particles JS
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React from 'react';

const ParticlesBox = () => {
  // Implement particlesInit in order to allow the particles to load
  // Without this, the particles will not appear
    const particlesInit = async (main) => {
      await loadFull(main);
    };

    // Particles Customization
    const options = {   
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.8,
            size: 15,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 3,
        },
      },
      detectRetina: true,
  }

  // Return the particles as a component with the parameters
    return(
      <Particles
      className="particles"
      id="tsparticles"
      init={particlesInit}
      options={options}
      />
    );
}

export default ParticlesBox;