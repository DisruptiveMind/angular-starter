import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { AppState } from '@app/app.service';
import { TitleService } from '@providers/title';
import { XLargeDirective } from '@directives/x-large';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: '[home-page]',
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    TitleService
  ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.html',
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: TitleService
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
