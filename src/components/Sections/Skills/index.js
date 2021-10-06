import Grid from "../Grid";

import { ReactComponent as SkillsIcon } from "../../../icons/skills.svg";

export default function Skills() {
  return (
    <div className="stretch-height" id="skills">
      <Grid direction="rtl" icon={SkillsIcon} title="Skills">
        <p>
          Donec dignissim at urna eget scelerisque. Nulla sollicitudin bibendum
          vulputate. Aenean vestibulum maximus eros, ac imperdiet velit
          venenatis id. Nam consectetur vestibulum tortor, sed sollicitudin
          justo fermentum a.
        </p>
        <p>
          Duis condimentum ornare lectus, vitae tincidunt est dignissim in.
          Donec tristique nec mi eu iaculis.{" "}
        </p>
      </Grid>
    </div>
  );
}
