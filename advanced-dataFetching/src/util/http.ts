export async function get<T>(url: string) {
    const response = await fetch(url)

    if (! response.ok) {
        // 400 ish or 500 ish error code
        throw new Error('Failed to fetch data')
    }

    // we could use a library like Zod to get automatic type inference (https://github.com/colinhacks/zod)
    return await response.json() as T
}