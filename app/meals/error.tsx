"use client";
export const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
};
export default Error;
