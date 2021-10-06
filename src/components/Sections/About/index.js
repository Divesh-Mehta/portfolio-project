import Grid from "../Grid";
import { ReactComponent as AboutIcon } from "../../../icons/about.svg";

export default function About() {
  return (
    <div className="stretch-height about" id="about">
      <Grid icon={AboutIcon} title="About me">
        <p>
          Donec venenatis leo at elit mollis blandit. Proin eros dolor, mollis
          eget ex sed, suscipit dignissim felis. Proin in leo id turpis tempor
          viverra. Cras facilisis vel mi eu aliquam. In eu ante nibh. Proin quis
          dignissim lacus. Maecenas congue diam ac bibendum mattis. Vestibulum a
          massa eget velit porttitor pretium.
        </p>
        <p>
          Nunc dapibus scelerisque nisi, rhoncus feugiat erat. Phasellus mattis
          blandit scelerisque. Quisque interdum mauris at leo facilisis, in
          pretium orci congue. Integer mattis porta vehicula.
        </p>
      </Grid>
    </div>
  );
}
