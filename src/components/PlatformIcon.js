import React from "react"
import { SiPlaystation4, SiNintendoswitch, SiSteam } from "react-icons/si"

const PlatformIcon = ({ platform, size }) => {
  return (
    <>
      {platform.id === 1 && <SiPlaystation4 size={size} />}
      {platform.id === 2 && <SiNintendoswitch size={size} />}
      {platform.id === 3 && <SiSteam size={size} />}
    </>
  )
}

export default PlatformIcon
