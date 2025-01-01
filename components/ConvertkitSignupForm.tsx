import React, { FormEventHandler, useCallback, useState } from "react";

const ConvertkitSignupForm: React.FC<
  React.PropsWithChildren<{
    formId: string;
  }>
> = ({ formId, children }) => {
  const name = "email";
  const [success, setSuccess] = useState<boolean | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true); // Indicate loading state
      setError(null); // Reset error state

      const target = event.target as HTMLFormElement;
      const data = new FormData(target);
      const email = data.get(name);

      if (!email) {
        setError("Email is required.");
        setLoading(false);
        return;
      }

      const body = JSON.stringify({
        formId,
        email,
      });
      const headers = new Headers({
        "Content-Type": "application/json; charset=utf-8",
      });

      try {
        const response = await fetch(`/api/subscribe`, {
          method: "POST",
          headers,
          body,
        });

        if (!response.ok) {
          throw new Error("Failed to subscribe. Please try again.");
        }

        setSuccess(true); // Show success message
      } catch (err) {
        console.error(err);
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false); // Reset loading state
      }
    },
    [formId]
  );

  if (success) {
    return (
      <p className="text-green-500 font-semibold text-sm text-center">
        You&apos;re in! Thank you for subscribing.
      </p>
    );
  }

  return (
    <div className="p-6 bg-zinc-800 rounded-xl shadow-2xl max-w-md mx-auto flex flex-col">
      <h2 className="text-zinc-200 font-bold text-sm md:text-xl mb-4">
        Subscribe to my newsletter 👇
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label className="text-sm font-normal text-zinc-400 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id={name}
          name={name}
          className="text-zinc-400 rounded-md border bg-zinc-800 border-zinc-700 py-1 px-2 focus:outline-none focus:border-gray-400 placeholder:text-sm mb-1"
          placeholder="you@example.com"
          required
        />
        {error && (
          <small className="h-4 min-h-4 text-red-500 font-semibold mb-2">
            {error}
          </small>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`text-zinc-100 w-full px-4 py-2 border-2 border-zinc-800 bg-zinc-700 rounded-md font-normal text-sm transition duration-200 hover:shadow-none ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : children ?? "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-zinc-400">
        We value your privacy and won’t spam you.
      </p>
    </div>
  );
};

export default ConvertkitSignupForm;
