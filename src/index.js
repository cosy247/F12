import { render } from 'setor';
import { setStore } from 'setor/store';
import style from './index.css';
import './AppRoot.setor';

setStore({
    link: 'https://github.com/cosy247/setor',
    title: 'About Setor',
});

render({
    root: '#root',
    component: 'app-root',
    style,
});
