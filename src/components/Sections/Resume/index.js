import Grid from "../Grid";
import { ReactComponent as ResumeIcon } from "../../../icons/resume.svg";

export default function Projects() {
  return (
    <div className="stretch-height resume" id="resume">
      <Grid direction="rtl" title="Resume" icon={ResumeIcon}>
        <p>
          Quisque viverra libero laoreet nibh accumsan, non porta ligula
          blandit. Integer ornare vestibulum lorem ac sodales. Suspendisse eu
          metus nec lorem egestas vestibulum.
        </p>
        <div className="btn-wrapper">
          <a
            className="btn"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1arbZ__6RVH0SzpRMTve72TYNXJ864Ehr/view?usp=sharing"
          >
            View Resume
          </a>
        </div>
      </Grid>
    </div>
  );
}
