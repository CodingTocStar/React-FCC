import { MoodBoardItem } from "./MoodBoardItem";


export function MoodBoard() {

  const moods = [
    {
      id: 1,
      color: "#f8b195",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Peaceful Path"
    },
    {
      id: 2,
      color: "#355c7d",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Calm Shore"
    },
    {
      id: 3,
      color: "#6c5b7b",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Green Nature"
    }
  ];

  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <div className="mood-board">
        {moods.map((mood) => (
          <MoodBoardItem
            key={mood.id}
            color={mood.color}
            image={mood.image}
            description={mood.description}
          />
        ))}
      </div>
    </div>
  );
}