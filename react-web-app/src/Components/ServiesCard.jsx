import React, { useRef } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const ServiesCard = ({ servies, idx }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [visible, setVisible] = React.useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-[300px]  w-[300px] absolute z-0 transaition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />
      <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
            src={servies.icon}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{servies.title}</h3>
          <p className="text-xs mt-2">{servies.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiesCard;
