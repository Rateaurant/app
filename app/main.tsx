import { Text } from "@/components/Mantile"
import { Logger } from "@/scripts/logger"
import { useEffect } from "react"

export default () => {
    Logger.info("Main: Call")
    useEffect(() => {
        Logger.info("Main: Load")
    }, [])
    return <Text>Main</Text>
}