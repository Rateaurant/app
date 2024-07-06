import { useEffect, useState } from 'react'

export default function useImage(fileName: string) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            // try {
            //     const response = await import(`@/assets/${fileName}`)
            //     setImage(response.default)
            // } catch (err: Error) {
            //     setError(err)
            // } finally {
            //     setLoading(false)
            // }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}