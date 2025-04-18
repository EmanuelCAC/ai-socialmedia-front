import React from 'react'

const Input = ({
    className = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    type = 'text',
    name,
    placeholder,
    required = false,
  } : {
    className?: string
    type?: string,
    name: string,
    placeholder: string,
    required?: boolean
  }) => {
    return (
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={6}
      />
    );
}

export default Input