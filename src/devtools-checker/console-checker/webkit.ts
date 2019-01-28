import { isWebkit } from '../../utils/browser';
import { clear, table } from '../../utils/console';
import { DevtoolsChecker } from '../devtools-checker';

const reg = / /;
let isOpen = false;

reg.toString = () => {
  isOpen = true;
  return webkitChecker.name;
};

const webkitChecker: DevtoolsChecker = {
  name: 'webkit-checker',
  async getDevtoolsDetail() {
    isOpen = false;
    table({ dep: { reg } });
    clear();
    return {
      isOpen,
      checkerName: this.name
    };
  },
  async skip() {
    return !isWebkit();
  }
};

export default webkitChecker;
