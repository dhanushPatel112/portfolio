import Clarity from "@microsoft/clarity"
import { useEffect } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_ID
    if (projectId) Clarity.init(projectId)
  }, [])

  return <>{children}</>
}
