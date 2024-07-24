import "./BeRightBack.styles.css";
import Tubby from "../../assets/TubbyToon-background.gif";
function BeRightBack() {
  return (
    <section className="beBackSoon">
      <h1>Tubby is doing some maintenance on the database.</h1>
      <h2>Be Back Soon!</h2>
      <img src={Tubby} alt="Tubby Duke's Mascot waving" />
    </section>
  );
}
export default BeRightBack;
