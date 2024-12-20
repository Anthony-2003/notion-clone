"use client";

import React from "react";
import Document from "../../../components/Document";

export default function DocumentPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const unwrappedParams = React.use(params); // Utiliza React.use() para deshacer la promesa.
  const { id } = unwrappedParams;

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}
