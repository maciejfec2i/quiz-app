import React, { useContext } from 'react'
import { Context } from '../context/context'

export default function CategoryIcon() {

  const context = useContext(Context)
  const category = context.currentQuestion.category

  const categoryIcons = {
    "Arts & Literature": "palette.png",
    "Film & TV": "watching.png",
    "Food & Drink": "fast-food.png",
    "General Knowledge": "book.png",
    "Geography": "map.png",
    "History": "parchment.png",
    "Music": "guitar.png",
    "Science": "chemistry.png",
    "Society & Culture": "sociology.png",
    "Sport & Leisure": "bike.png"
  }



  return (
    <img src={categoryIcons[category]} alt={`${category} icon`} className="category-icon" />
  )
}
