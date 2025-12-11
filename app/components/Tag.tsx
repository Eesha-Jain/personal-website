import type { ReactNode } from "react";

export type TagSize = "sm" | "md" | "lg";

interface TagProps {
  children: ReactNode;
  size?: TagSize;
  className?: string;
}

const SIZE_CLASSES: Record<TagSize, string> = {
  sm: "tag-sm",
  md: "",
  lg: "tag-lg",
};

export function Tag({ children, size = "md", className = "" }: TagProps): JSX.Element {
  return (
    <span className={`tag ${SIZE_CLASSES[size]} ${className}`.trim()}>
      {children}
    </span>
  );
}
