export const Button = ({className, size, children}) => {
  const baseClasses = "relative overflow-hidden rounded-full";

  const classes = baseClasses;
  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
        </span>
    </button>
  );
};