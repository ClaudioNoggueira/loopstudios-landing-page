import "../components/styles/ImageCard.css";

interface ImageCardProps {
  textContent: string;
  imageURL: string;
}

export default function ImageCard(props: ImageCardProps) {
  const { textContent, imageURL } = props;

  return (
    <div className="image-container">
      <img className="image" src={imageURL} alt={`${textContent} image`} />
      <h3>{textContent}</h3>
    </div>
  );
}
