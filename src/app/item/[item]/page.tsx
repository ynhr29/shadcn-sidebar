import React from "react"

const ItemPage = ({ params }: { params: { item: string } }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold capitalize">{params.item} Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        minus illo dicta dolor, aspernatur architecto adipisci ab totam
        repudiandae quisquam saepe, perspiciatis perferendis omnis dignissimos,
        at dolorem aut! Dicta, rem.
      </p>
    </div>
  )
}

export default ItemPage
