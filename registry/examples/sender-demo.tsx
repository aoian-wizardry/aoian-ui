import * as React from "react"

import {
  Sender,
  SenderButton,
  SenderContent,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderTextArea,
} from "@/registry/aoian-ui/sender/sender"

export default function SenderDemo() {
  const [value, setValue] = React.useState("")

  return (
    <Sender
      value={value}
      onChange={(e) => {
        setValue(e?.target?.value)
      }}
      onSubmit={() => {
        console.log(value)
      }}
    >
      <SenderContent>
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBar>
            <SenderButton />
          </SenderOperationBar>
          <SenderOperationBarExtra />
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
