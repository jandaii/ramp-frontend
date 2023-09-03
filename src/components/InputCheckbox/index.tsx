import { useRef, useState } from "react"

import { InputCheckboxComponent } from "./types"
import classNames from "classnames"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  // const [ifchecked, setIfchecked] = useState<boolean>(checked);

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        htmlFor= {inputId}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        // onClick={() => {
        //   setIfchecked(!ifchecked);
        // }}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {onChange(!checked)}}
      />
    </div>
  )
}
