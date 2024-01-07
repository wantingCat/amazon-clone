import React from "react"

type Data = {
    title: string
}

const ProductDetails: React.FC<Data> = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

export default ProductDetails