import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

export default async function (ctx, inject) {
  ctx.$UIkit = UIkit;
  inject('UIkit', UIkit);
};