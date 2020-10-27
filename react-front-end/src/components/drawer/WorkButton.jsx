import React from 'react'

import Button from '@material-ui/core/Button'

export default function Work(props) {
  return (
    <Button fullWidth={true}    onClick={props.onClick}>Work</Button>
  )
}