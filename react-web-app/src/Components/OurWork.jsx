import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      image: assets.work_mobile_app,
      title: "Mobile app Marketing",
      description: "we turn ideas into innovative mobile app experiences.",
    },
    {
      image: assets.work_dashboard_management,
      title: "Dashboard management",
      description:
        "we help you manage and optimize your dashboards effectively.",
    },
    {
      image: assets.work_fitness_app,
      title: "Fitness App Promotion",
      description: "we help you promote your fitness apps effectively.",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className=" flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest Work"
        desc="From start to finish, we deliver exceptional results. Explore our portfolio to see how we bring ideas to life."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
        {workData.map((work, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            key={idx}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
