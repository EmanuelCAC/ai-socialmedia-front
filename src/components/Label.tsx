import React from 'react'

const Label = ({
  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  children,
  htmlFor,
}: {
  className?: string,
  children: React.ReactNode,
  htmlFor: string,
}) => {
  return (
    <label className={className} htmlFor={htmlFor}>{children}</label>
  );
}

export default Label