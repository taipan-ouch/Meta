import * as React from "react";
import {Json, JsonMap} from '../TsTypes'

interface Props {
  json?: Json
}

export default function MetaForm(props: Props) {
  const json = (props.json) as JsonMap
  return (
    <div className="MetaForm">
      {json?.title}
    </div>
  )
}