export function getImageUrl(person, size = "s") {
  if (person.imageId !== undefined) {
    return (
      "https://react.dev/images/docs/scientists/" +
      person.imageId +
      size +
      ".jpg"
    );
  } else
    return "https://al.edu.pl/centrummediacji/images/mediatorzy/no-avatar.png";
}
