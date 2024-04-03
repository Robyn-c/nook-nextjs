"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
} : LoginButtonProps) => {
  const onClick = () => {
    console.log("Login Button")
  }

  if (mode === "modal") {
    return (
      <span>
        TODO IMPLEMENT MODAL
      </span>
    )
  }

  return(
    <span className="cursor-pointer">
      {children}
    </span>
  )
}