import cn from "classnames";
import "./index.css";

export default function Grid({
  title = "",
  direction = "ltr", // or rtl
  icon: Icon = () => null,
  children = null
}) {
  const wrapperClassName = cn("grid", {
    [direction]: !!direction
  })
  const contentClassName = cn({
    "padd-right": direction === "ltr",
    "padd-left": direction === "rtl"
  });

  return (
    <div className={wrapperClassName}>
      <div className="grid-col icon-col">
        <div className={contentClassName}>
          <Icon />
        </div>
      </div>
      <div className="grid-col info-col">
        <div className={contentClassName}>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
