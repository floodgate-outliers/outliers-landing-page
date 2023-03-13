import clsx from "clsx";
import React, { FC, ReactElement } from "react";
import { motion, Variants } from "framer-motion";

type BasicButtonProps = {
  type: "button" | "submit" | undefined;
  color: "blue" | "transparent";
  children: ReactElement | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  disableScale?: boolean;
};

export const BasicButton: FC<BasicButtonProps> = ({
  type = "button",
  color,
  children,
  onClick,
  disabled,
  disableScale,
}) => {
  const buttonVariants: Variants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: disableScale ? 1 : 1.05,
    },
    disabled: {
      scale: 1,
      opacity: 0.3,
    },
  };

  return (
    <motion.button
      type={type}
      variants={buttonVariants}
      initial="initial"
      animate={disabled ? "disabled" : "initial"}
      whileHover={disabled ? "disabled" : "hover"}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "px-8 py-3 text-xl",
        color === "blue" ? "bg-floodgate text-off-white" : "bg-transparent"
      )}
    >
      {children}
    </motion.button>
  );
};
