import React from "react"
import { Link } from "gatsby"
import bannerLogo from "../../media/profile-logo-dark.svg"
import _ from "./style.module.css"

export default () => (
  <Link to="/" className={_.logo}>
  <img className={_.logo} src={bannerLogo} alt="shawn rossouw illustration"/>
  </Link>
)