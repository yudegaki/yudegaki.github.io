import React from "react";

const StyleContainer = ({ children }: React.ComponentProps<"div">) => {
  return (
    <main className="flex flex-col items-center justify-center p-5 md:p-24">
      <div className="w-full max-w-3xl">{children}</div>
    </main>
  );
};

export default StyleContainer;
