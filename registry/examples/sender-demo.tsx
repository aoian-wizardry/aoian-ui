import * as React from "react"
import { Info, Lightbulb, Rocket, Smile, TriangleAlert } from "lucide-react"

import { Sender } from "@/registry/aoian-ui/sender/sender"

export default function SenderDemo() {
  const [value, setValue] = React.useState("")

  const handleSubmit = () => {}

  return (
    <Sender
      value={value}
      onChange={(e) => {
        setValue(e?.target.value)
      }}
      onSubmit={(e) => {
        e.preventDefault()
        console.log(e)
      }}
    />
  )
}
