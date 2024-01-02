import React from "react";

interface Children {
  title: string;
  icon: React.FC | string;
  url: string;
}
export type NavigationItem = {
  title: string;
  smallTitle: string;
  url: string;
  icon: React.FC | string;
  children?: Children[];
};

export type Navigations = NavigationItem[];
