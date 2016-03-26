import home from './home';
import timer from './timer';
import tasks from './tasks';

export default function(context) {
    home(context);
    timer(context);
    tasks(context);
}
