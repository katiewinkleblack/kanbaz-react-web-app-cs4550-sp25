
import { ReactNode } from "react";


export default function Highlights({ children }: 
    { children: ReactNode }) {
  return (
    <span id="wd-highlight" className="wd-highlight">
      {children}
    </span>
  );
}
