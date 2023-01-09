import { bind, createComponent } from "../setor";
import html from './Root.html';

createComponent('root', html, (props) => {
    const logos = this.logos = bind({
        const logos = bind({
            cont: ['🥪', '🍧', '🍰', '🍟', '🌮', '🥠', '🍚', '🍜', '🍨', '🥧'],
            index: 0,
            get current() {
                return logos.cont[logos.index]
            }
        });

        setInterval(() => {
            logos.index++;
            if(logos.index === logos.cont.length) {
                logos.index = 0;
            }
        }, 5000);
    })
})