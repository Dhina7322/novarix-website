import { motion } from "motion/react";



export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all";

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#FAC778] to-[#885113] text-white hover:shadow-lg hover:shadow-[#FAC778]/30 hover:scale-105",
    secondary: "bg-white text-[#FAC778] border-2 border-[#FAC778] hover:bg-[#FAC778] hover:text-white hover:scale-105",
    outline: "bg-transparent text-[#1a1a2e] border-2 border-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white hover:scale-105",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
