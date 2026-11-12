import { getImageUrl } from "./utils/utils"

export default function Avatar({ name = "No Name", imageId, size = 100 }) {
    const person = {
        name,
        imageId
    }

  return (
        <img 
            className='avatar'
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
  )
}