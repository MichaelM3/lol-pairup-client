import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const MessageForm = (props) => {
  return (
    <Form onSubmit={props.handleMessageSubmit}>
      <Input
        fluid
        size='massive'
        onChange={props.handleMessageInput}
        type="text"
        name="messageForm"
        placeholder="Message Content"
      />
      <Form.Button fluid>send</Form.Button>
    </Form>
  )
}

export default MessageForm;
