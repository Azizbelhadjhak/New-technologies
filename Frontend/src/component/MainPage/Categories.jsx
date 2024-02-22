
import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/T-Shirts.png",
      cateName: "T-Shirts",
    },
    {
      cateImg: "./images/category/Pants.png",
      cateName: "Pants",
    },
    {
      cateImg: "./images/category/Shorts.png",
      cateName: "Shorts",
    },
    {
      cateImg: "./images/category/Socks.png",
      cateName: "Socks",
    },
    {
      cateImg: "./images/category/Hoodies.png",
      cateName: "Hoodies",
    },
   
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
