export {};

declare global {
  interface PropsWithChildren {
    children: React.ReactNode;
  }

  interface WithClassName {
    className?: string;
  }
}
