"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export default function Breadcrumbs() {
  const path = usePathname();
  const segments = path.split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
       
          if (!segment) return null;

          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const isDoc = segment === "doc"; // Verificamos si el segmento es "doc"

          return (
            <Fragment key={segment}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isDoc ? (
                  // Si el segmento es "doc", mostrarlo como texto (no un enlace)
                  <BreadcrumbPage>{segment}</BreadcrumbPage>
                ) : isLast ? (
                  // Si es el último segmento, no es un enlace
                  <BreadcrumbPage>{segment}</BreadcrumbPage>
                ) : (
                  // De lo contrario, mostrarlo como un enlace
                  <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
