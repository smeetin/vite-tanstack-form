import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";

type StepButtonProps = {
  label: string;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function StepButton({
  label,
  className,
  size,
  ...props
}: StepButtonProps) {
  return (
    <Button className={className} size={size} type="button" {...props}>
      {label}
    </Button>
  );
}
