import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-sm md:prose-base prose-invert prose-cyan"
      )}
    >
      {children}
    </div>
  );
}
