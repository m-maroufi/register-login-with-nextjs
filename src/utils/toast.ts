import toast from "react-hot-toast";

type errorType = "success" | "error" | "warning";
export const notify = (
  msg: string,
  errorType: errorType,
  duration: number = 2000
) => {
  switch (errorType) {
    case "success":
      return toast.success(msg, {
        duration: duration,
        style: {
          background: "var(--color-green-500)",
          color: "var(--color-white)",
          fontFamily: "var(--font-yekanbakh)",
          fontWeight: "bolder",
        },
        iconTheme: {
          primary: "var(--color-green-50)",
          secondary: "var(--color-green-500)",
        },
      });

    case "error":
      return toast.error(msg, {
        duration: duration,
        style: {
          background: "var(--color-red-500)",
          color: "var(--color-white)",
          fontFamily: "var(--font-yekanbakh)",
          fontWeight: "bolder",
        },
        iconTheme: {
          primary: "var(--color-red-50)",
          secondary: "var(--color-red-500)",
        },
      });
  }
};
