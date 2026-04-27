// "use client";

// import { motion } from "framer-motion";

// export default function CarouselImage({
//   bg,
//   isActive,
// }: {
//   bg: string;
//   isActive: boolean;
// }) {
//   return (
//     <motion.div
//       initial={false}
//       animate={
//         isActive
//           ? {
//               clipPath: "circle(150% at 50% 50%)",
//               zIndex: 2,
//             }
//           : {
//               clipPath: "circle(150% at 50% 50%)",
//               zIndex: 1,
//             }
//       }
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       style={{
//         position: "absolute",        // 🔑 KEY
//         inset: 0,                    // fill slide
//         background: bg,
//       }}
//     />
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function CarouselItem({
  bg,
  isActive,
}: {
  bg: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={
        isActive
          ? { clipPath: "circle(150% at 50% 50%)" }
          : { clipPath: "circle(0% at 50% 50%)" }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "absolute",
        inset: 0,
        background: bg,
      }}
    >kkkkkbla</motion.div>
  );
}

