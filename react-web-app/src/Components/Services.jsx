import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiesCard from "./ServiesCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "Reach a wider audience and boost your brand visibility with our targeted advertising solutions.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Creation",
      description:
        "Engage your audience with high-quality, relevant content tailored to your brand's voice and goals.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media Management",
      description:
        "Enhance your online presence and connect with your audience through strategic social media management.",
      icon: assets.social_icon,
    },
    {
      title: "Marketing Strategy",
      description:
        "Develop and implement effective marketing strategies to drive growth and achieve your business objectives.",
      icon: assets.marketing_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden "
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
        src={assets.bgImage2}
        alt=""
      />
      <Title
        title="How can we help ?"
        desc="From Strategy to Execution, we craft digital experiences that drive growth and deliver results."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((servies, idx) => (
          <ServiesCard key={idx} servies={servies} idx={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
