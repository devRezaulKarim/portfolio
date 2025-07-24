import { useId } from "react"; // Import useId
import { cn } from "../../lib/utls";

export const ConeIcon = ({
  className,
  color = "#ffffff",
}: {
  className?: string;
  color: string;
}) => {
  const uniqueId = useId(); // Generate a unique ID

  const maskId = `path-1-inside-1_${uniqueId}`;
  const paint0Id = `paint0_linear_${uniqueId}`;
  const paint1Id = `paint1_linear_${uniqueId}`;

  return (
    <svg
      className={cn(
        "cone-icon h-[220px] w-[220px] md:h-[280px] md:w-[280px] lg:h-[340px] lg:w-[340px]",
        className,
      )}
      viewBox="0 0 341 341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id={maskId} fill={color}>
        {" "}
        {/* Use unique maskId */}
        <path d="M324.69 16.3008H16.3105V324.507L0 340.808L0.192383 341H0V0H341L324.69 16.3008Z" />
      </mask>
      <path
        d="M324.69 16.3008H16.3105V324.507L0 340.808L0.192383 341H0V0H341L324.69 16.3008Z"
        fill={`url(#${paint0Id})`} // Use unique paint0Id
      />
      <path
        d="M324.69 16.3008V17.3008H325.104L325.397 17.0081L324.69 16.3008ZM16.3105 16.3008V15.3008H15.3105V16.3008H16.3105ZM16.3105 324.507L17.0174 325.214L17.3105 324.921V324.507H16.3105ZM0 340.808L-0.706895 340.1L-1.41443 340.807L-0.707107 341.515L0 340.808ZM0.192383 341V342H2.6066L0.89949 340.293L0.192383 341ZM0 341H-1V342H0V341ZM0 0V-1H-1V0H0ZM341 0L341.707 0.707297L343.415 -1L341 -1V0ZM324.69 16.3008V15.3008H16.3105V16.3008V17.3008H324.69V16.3008ZM16.3105 16.3008H15.3105V324.507H16.3105H17.3105V16.3008H16.3105ZM16.3105 324.507L15.6037 323.8L-0.706895 340.1L0 340.808L0.706895 341.515L17.0174 325.214L16.3105 324.507ZM0 340.808L-0.707107 341.515L-0.514724 341.707L0.192383 341L0.89949 340.293L0.707107 340.101L0 340.808ZM0.192383 341V340H0V341V342H0.192383V341ZM0 341H1V0H0H-1V341H0ZM0 0V1H341V0V-1H0V0ZM341 0L340.293 -0.707297L323.984 15.5935L324.69 16.3008L325.397 17.0081L341.707 0.707297L341 0Z"
        fill={`url(#${paint1Id})`} // Use unique paint1Id
        mask={`url(#${maskId})`} // Use unique maskId
      />
      <defs>
        <linearGradient
          id={paint0Id} // Use unique paint0Id
          x1="0"
          y1="0"
          x2="306"
          y2="283"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stopColor={color} stopOpacity="0" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
        <linearGradient
          id={paint1Id} // Use unique paint1Id
          x1="0"
          y1="0"
          x2="341"
          y2="332.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
    </svg>
  );
};
