import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "./field-components/text-field";
import { StepButton } from "./form-components/step-button";
import { SubmitButton } from "./form-components/submit-button";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm, withFieldGroup, withForm } = createFormHook({
  fieldComponents: { TextField },
  fieldContext,
  formComponents: { SubmitButton, StepButton },
  formContext,
});
