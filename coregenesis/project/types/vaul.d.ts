declare module 'vaul' {
  import * as React from 'react';

  export interface DrawerProps {
    shouldScaleBackground?: boolean;
    children?: React.ReactNode;
  }

  export const Drawer: React.FC<DrawerProps> & {
    Trigger: React.FC<React.HTMLAttributes<HTMLButtonElement>>;
    Portal: React.FC<{ children: React.ReactNode }>;
    Close: React.FC<React.HTMLAttributes<HTMLButtonElement>>;
    Overlay: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
    >;
    Content: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
    >;
    Title: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>
    >;
    Description: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>
    >;
  };
} 