import React from 'react'

const Input = ({
    className = "flex h-10 w-full border-2 border-black rounded-xl border-input bg-[#1A1717] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    type = 'text',
    value,
    onChange,
    name,
    placeholder,
    required = false,
  } : {
    className?: string
    type?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
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
        value={value}
        onChange={onChange}
      />
    );
}

export default Input