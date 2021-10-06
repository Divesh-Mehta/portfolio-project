import Grid from "../Grid";
import { ReactComponent as ContactIcon } from "../../../icons/contact_me.svg";

export default function Projects() {
  return (
    <div className="stretch-height contact" id="contact-me">
      <Grid title="Contact Me" icon={ContactIcon}>
        <p>
          Nulla iaculis tincidunt lectus, ut tempus turpis auctor ac. Mauris
          iaculis tristique felis viverra rutrum.
        </p>
        <div className="btn-wrapper">
          <a className="btn" href="mailto:dbxitachi771@gmail.com">
            Email Me
          </a>
        </div>
      </Grid>
    </div>
  );
}
