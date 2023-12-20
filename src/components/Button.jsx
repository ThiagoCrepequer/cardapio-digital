// eslint-disable-next-line react/prop-types
export function Button({className, children, ...props}) {
    return (
        <button 
            className={`px-4 py-2 rounded-md bg-primary text-white font-semibold ${className}`}
            {...props} 
        >
            {children}
        </button>
    )
}