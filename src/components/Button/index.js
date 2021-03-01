import React from "react";
import Icon from "react-icons-kit";

const Button = ({ customClass, title, icon, iconPosition, ...props }) => {
  let addClasses = [];
  if (customClass) {
    addClasses.push(customClass);
  }

  let buttonIcon = icon && <Icon icon={icon} size={15} className="ml-1" />;

  let position = iconPosition || "right";

  return (
    <button className={`btn ${[addClasses].join(" ")}`} {...props}>
      {position === "right" && buttonIcon}
      {title}
      {position === "left" && buttonIcon}
    </button>
  );
};

export default Button;
