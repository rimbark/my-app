import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {reRenderPage} from "./render";

reRenderPage(state);

reportWebVitals();
