import "./footer.css";
export default function Footer() {
  const date = new Date();
  return (
    <div className="foot">
      {`This site is Created By Om @ copyright ${date.getFullYear()}`}
    </div>
  );
}
