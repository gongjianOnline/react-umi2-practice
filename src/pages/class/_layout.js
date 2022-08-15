import React from "react"
const Component = (props)=>{
  console.log(props)
  return (
    <>
      <div>this is 嵌套路由</div>
      {props.children}
    </>
  )
}
export default Component