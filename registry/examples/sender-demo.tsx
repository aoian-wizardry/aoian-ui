import * as React from "react"
import { toast } from "sonner"

import {
  Sender,
  SenderButton,
  SenderContent,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderSearchToggle,
  SenderTextArea,
} from "@/registry/aoian-ui/sender/sender"

export default function SenderDemo() {
  const [value, setValue] = React.useState("")
  const [isSearchMode, setIsSearchMode] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <div className="grow space-y-4 self-start">
      <Sender
        placeholder="Hello? this is Aoian UI Sender"
        loading={isLoading}
        value={value}
        onChange={(e) => {
          setValue(e?.target?.value)
        }}
        onSubmit={() => {
          setIsLoading(true)
          setTimeout(() => {
            toast.success(value)
            setValue("")
            setIsLoading(false)
          }, 3000)
        }}
      >
        <SenderContent>
          <SenderTextArea />
          <SenderOperation>
            <SenderOperationBarExtra>
              <SenderSearchToggle
                pressed={isSearchMode}
                onPressedChange={setIsSearchMode}
              >
                Search
              </SenderSearchToggle>
            </SenderOperationBarExtra>
            <SenderOperationBar>
              <SenderButton />
            </SenderOperationBar>
          </SenderOperation>
        </SenderContent>
      </Sender>
      <p className="pl-4">Force as loading</p>
      <Sender onSubmit={() => null} loading={true} value={value}>
        <SenderContent>
          <SenderTextArea />
          <SenderOperation>
            <SenderOperationBarExtra>
              <SenderSearchToggle
                pressed={isSearchMode}
                onPressedChange={setIsSearchMode}
              >
                Search
              </SenderSearchToggle>
            </SenderOperationBarExtra>
            <SenderOperationBar>
              <SenderButton />
            </SenderOperationBar>
          </SenderOperation>
        </SenderContent>
      </Sender>
      <p className="pl-4">Set to disabled</p>
      <Sender
        onSubmit={() => null}
        value={value}
        disabled
        placeholder="Set to disabled"
      >
        <SenderContent>
          <SenderTextArea />
          <SenderOperation>
            <SenderOperationBarExtra>
              <SenderSearchToggle
                pressed={isSearchMode}
                onPressedChange={setIsSearchMode}
              >
                Search
              </SenderSearchToggle>
            </SenderOperationBarExtra>
            <SenderOperationBar>
              <SenderButton />
            </SenderOperationBar>
          </SenderOperation>
        </SenderContent>
      </Sender>
    </div>
  )
}
