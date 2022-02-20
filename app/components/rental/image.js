import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class RentalImageComponent extends Component {
  constructor(...args) {
    super(...args);
    this.showLarge = false;
  }
  @tracked showLarge = false;
  @action toggleDisplay() {
    this.showLarge = !this.showLarge;
  }
}
