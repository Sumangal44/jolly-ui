import { TextField } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { TextArea } from "@/registry/default/ui/textarea"

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <TextField className="grid w-full gap-2" aria-label="Message Input">
        <TextArea placeholder="Type your message here." />
      </TextField>
      <Button>Send message</Button>
    </div>
  )
}
export default TextareaWithButton
