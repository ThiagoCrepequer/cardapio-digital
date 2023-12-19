// eslint-disable-next-line react/prop-types
export function FormAuth({ children, title, ...props }) {
    return (
        <section className="w-full h-[100vh] flex justify-center items-center">
            <div className="bg-zinc-900 p-8 rounded-md shadow-md">
                <h1 className="text-2xl mb-6">{title}</h1>
                <form
                    className="flex flex-col gap-4"
                    {...props}
                >
                    {children}
                </form>
            </div>
        </section>
    )
}