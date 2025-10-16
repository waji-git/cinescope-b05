import Link from "next/link"
 
import { Badge } from "@/components/ui/badge"
 
export function LinkAsBadge() {
  return (
    <Badge asChild>
      <Link href="/">Badge</Link>
    </Badge>
  )
}