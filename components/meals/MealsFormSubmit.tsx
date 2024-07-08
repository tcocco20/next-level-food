"use client";

import { experimental_useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = experimental_useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Share Meal"}
    </button>
  );
};

export default MealsFormSubmit;
