// eslint-disable-next-line react/prop-types
export function Input({ className, ...props}) {
    return (
        <input 
            type="text"
            className={`border border-gray-300 rounded-md px-4 py-2 ${className}`}
            {...props} 
        />
    )
}