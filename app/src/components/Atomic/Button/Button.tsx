"use client"

import React from 'react';

export default function Button({
  children,
  bgColor = 'var(--color-primary)',
  handler,
}: {
  children?: React.ReactNode;
  bgColor?: string;
  handler?: () =>
    | Promise<void>
    | (() => void)
    | (() => Promise<boolean>)
    | (() => boolean);
}) {
  return (
    <button
      className={`text-center flex flex-row items-center justify-center min-w-fit min-h-fit h-[40px] w-[250px] rounded-3xl text-[var(--light-text)] text-[1.1rem] shadow-xl`}
      onClick={()=>handler?.()}
      style={{backgroundColor: bgColor}}
    >
      {children}
    </button>
  );
}
