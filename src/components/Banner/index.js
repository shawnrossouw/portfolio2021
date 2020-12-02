import React from "react"
import Logo from "../Logo"
import _ from "./style.module.css"

export default () => {
  return (
    <div className={_.banner} role="banner">
      <Logo/>
    </div>
  )
}