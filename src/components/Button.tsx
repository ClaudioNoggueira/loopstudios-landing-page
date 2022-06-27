import "../components/styles/Button.css";

interface ButtonProps {
  textContent: string;
  className: string;
}

export default function Button(props: ButtonProps) {
  const { textContent, className } = props;

  return <button className={`btn ${className}`}>{textContent}</button>;
}
