import artIcon from "../assets/palette.png"
import sportIcon from "../assets/bike.png"
import generalKnowledgeIcon from "../assets/book.png"
import scienceIcon from "../assets/chemistry.png"
import foodIcon from "../assets/fast-food.png"
import musicIcon from "../assets/guitar.png"
import gepgraphyIcon from "../assets/map.png"
import historyIcon from "../assets/parchment.png"
import societyIcon from "../assets/sociology.png"
import filmIcon from "../assets/watching.png"

export default function CategoryIcon({ category }) {

  const categoryIcons = {
    "Arts & Literature": artIcon,
    "Film & TV": filmIcon,
    "Food & Drink": foodIcon,
    "General Knowledge": generalKnowledgeIcon,
    "Geography": gepgraphyIcon,
    "History": historyIcon,
    "Music": musicIcon,
    "Science": scienceIcon,
    "Society & Culture": societyIcon,
    "Sport & Leisure": sportIcon
  }

  return (
    <img src={categoryIcons[category]} alt={`${category} icon`} className="category-icon" />
  )
}
