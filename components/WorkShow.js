import SimpleBlock from './SimpleBlock';
import { css } from '@emotion/css'

export default function WorkShow() {

    const index = 1;

    return(
        <div className={css`
            display: grid;
            max-width: 1000px;
            width: 100%;
        `}>
             <SimpleBlock caption="Building a Distributed Brand" image="/preview-brand.png" target="/projects/building-a-distributed-brand" bw="true"  />
             
            <SimpleBlock caption="Neighborhood Scale Software" image="/preview-software.png" target="/projects/neighborhood-scale-software" />

            <SimpleBlock caption="Design System Wins" image="/preview-system.png" target="/projects/design-system-wins" />
             
        <SimpleBlock caption="No Code Rules People Understand" image="/preview-rule.png" target="/projects/design-for-general-purpose" />
        </div>
    )
}