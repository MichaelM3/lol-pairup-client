import React from 'react'
import { Form } from 'semantic-ui-react'

const MessageForm = (props) => {
  return (
    <Form onSubmit={props.handleMessageSubmit}>
      <Form.TextArea
        onChange={props.handleMessageInput}
        type="text"
        name="messageForm"
        placeholder="Message Content"
      />
      <Form.Button>send</Form.Button>
    </Form>
  )
}

export default MessageForm;
