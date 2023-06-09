import "./Cursor.css";
import { useRef } from "react";

export default function Cursor() {
  const cursor = useRef(null);
  const cursor2 = useRef(null);

  window.onmousemove = function (e) {
    if (cursor2 && cursor2) {
      
      // const pos = { left: `${e.clientX - 10}px`, top: `${e.clientY - 10}px` };
      const pos2 = { left: `${e.clientX - 12}px`, top: `${e.clientY - 12}px` };
    
      // cursor.current.animate(pos, {
      //   duration: 500,
      //   fill: "forwards"
      // });

      cursor2.current.animate(pos2, {
        duration: 500,
        fill: "forwards"
      });
    }
    
  }
  return (
    <div >
      {/* <div ref={cursor} className="cursor"></div> */}
      <div ref={cursor2} className="cursor2"></div>

    </div>
  );
}
