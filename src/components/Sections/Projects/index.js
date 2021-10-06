import Grid from "../Grid";
import { ReactComponent as ProjectsIcon } from "../../../icons/projects.svg";

export default function Projects() {
  return (
    <div className="stretch-height" id="projects">
      <Grid title="Projects" icon={ProjectsIcon}>
        <p>
          Quisque viverra libero laoreet nibh accumsan, non porta ligula
          blandit. Integer ornare vestibulum lorem ac sodales. Suspendisse eu
          metus nec lorem egestas vestibulum.
        </p>
        <ol>
          <li>
            <p>Phasellus finibus, lectus nec consectetur mattis.</p>
          </li>
          <li>
            <p>Nullam nec viverra quam.</p>
          </li>
          <li>
            <p>Tempus tincidunt dui. Vestibulum bibendum lectus.</p>
          </li>
          <li>
            <p>In augue velit, vulputate vel ligula sit amet.</p>
          </li>
        </ol>
      </Grid>
    </div>
  );
}
