import * as React from "react";
import { Link } from "react-router-dom";

export interface INavItemProps {
  path: string;
  content: string;
  Icon: React.ReactNode;
  title: string;
  currentPath: string;
}

export default function NavItem({ path, content, title, Icon, currentPath }: INavItemProps) {
  const selectedClass = currentPath === path ? "selected" : "";

  return (
    <div className={`navigation__item ${selectedClass}`}>
      <Link to={path} aria-label={title} title={title}>
        <span>
          {Icon} <span className="navigation__item__content hidden">{content}</span>
        </span>
      </Link>
    </div>
  );
}
