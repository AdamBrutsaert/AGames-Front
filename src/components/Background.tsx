import { FunctionComponent, ReactNode } from "react";

interface BackgroundProps {
  children?: ReactNode;
  className?: string;
}

// TODO: Use Next/Image for optimizations

const Background: FunctionComponent<BackgroundProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`h-screen w-screen bg-background bg-cover ${className}`}>
      {children}
    </div>
  );
};

export default Background;
