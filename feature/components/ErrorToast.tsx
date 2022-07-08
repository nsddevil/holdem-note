import React from "react";

interface ErrorToastProps {
  errors: string[];
}

function ErrorToast({ errors }: ErrorToastProps) {
  return (
    <ul>
      {errors.map((err) => (
        <li key={err} className="p-2 font-bold text-red-600">
          {err}
        </li>
      ))}
    </ul>
  );
}

export default ErrorToast;
