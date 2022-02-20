import Component from '@glimmer/component';
import ENV from 'try-rental/config/environment';
export default class MapComponent extends Component {
  constructor(...args) {
    super(...args);
    console.log(...args);
  }
  get token() {
    return encodeURIComponent(ENV.MAP_ACCESS_TOKEN);
  }
}
