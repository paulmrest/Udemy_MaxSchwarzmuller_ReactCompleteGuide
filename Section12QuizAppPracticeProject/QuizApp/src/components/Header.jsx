import logoImage from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={logoImage}></img>
      <h1>REACTQUIZ</h1>
    </header>
  );
}