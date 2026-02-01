import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-full overflow-x-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  );
}
