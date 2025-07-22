import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", containScroll: "trimSnaps", loop: false },
    [Autoplay()]
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light pl-2">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* projects slider container */}

      <div className="overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-x-8 items-center h-full">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="embla__slide flex justify-center shrink-0 w-[75%] md:w-[60%] lg:w-[50%] mx-auto"
              >
                <div className="w-full max-w-md relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto mb-10"
                  />

                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[10px] w-3/4 bg-white px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 text-center">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm text-center">
                      {project.price} <span className="px-1">|</span>
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
