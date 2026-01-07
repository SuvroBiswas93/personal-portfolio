import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '../utils/animations';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 border-2 border-gray-700",
    outline: "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={!disabled ? hoverScale : {}}
      whileTap={!disabled ? tapScale : {}}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
};

export default Button;
