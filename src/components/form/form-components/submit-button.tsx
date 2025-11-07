import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useFormContext } from "../generic";

type SubmitButtonProps = {
  label: string;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function SubmitButton({
  label,
  className,
  size,
  ...props
}: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          className={className}
          disabled={isSubmitting}
          size={size}
          type="submit"
          {...props}
        >
          {isSubmitting && <Spinner />}
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
