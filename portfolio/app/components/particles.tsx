"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import mountainRange from "../../public/SharayaBakerMountainRange.svg";

export default function CustomParticles() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                detectRetina: false,
                background: {
                    position: "50% 50%"
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble"
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 40,
                            duration: 2,
                            opacity: 8,
                            size: 3,
                            speed: 3
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    lineLinked: {
                        enable: false
                    },
                    move: {
                        bounce: false,
                        direction: "none",
                        enable: true,
                        outMode: "out",
                        random: true,
                        speed: 0.3,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000
                        },
                        limit: 100,
                        value: 100
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 2,
                            sync: false
                        },
                        random: false,
                        value: 0.7
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        animation: {
                            enable: false,
                            minimumValue: 0.1,
                            speed: 10,
                            sync: false
                        },
                        random: true,
                        value: 1
                    }
                },
                polygon: {
                    draw: {
                        enable: true,
                        lineColor: "rgba(255,255,255,0.2)",
                        lineWidth: 0.5,
                    },
                    move: {
                        radius: 15
                    },
                    inlineArrangement: "equidistant",
                    scale: 1,
                    type: "inline",
                    url: "/SharayaBakerMountainRange2.svg"
                },

            }}
        />
    );
};