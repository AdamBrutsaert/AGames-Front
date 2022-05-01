import { FunctionComponent, ReactNode } from "react";

interface FrameProps {
  children?: ReactNode;
  className?: string;
}

const Frame: FunctionComponent<FrameProps> = ({ children, className }) => {
  return (
    <div className="border-8 border-mauve">
      <div className={`border-4 border-white bg-mauve ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Frame;
