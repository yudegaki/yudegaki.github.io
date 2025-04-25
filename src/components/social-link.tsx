import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type SocialLinkProps = {
  name: string;
  icon: ReactNode;
  link: string;
};

export const SocialLink = (props: SocialLinkProps) => {
  return (
    <Link
      key={props.name}
      to={props.link}
      className="text-gray-500 hover:text-gray-700"
    >
      {props.icon}
    </Link>
  );
};
