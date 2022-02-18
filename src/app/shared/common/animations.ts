import {animate, state, style, transition, trigger} from '@angular/animations';

export const toggleAnimation = trigger('inOutAnimation', [
  state('in', style({height: '*', opacity: 1})),
  state('out', style({height: 0, opacity: 0})),
  transition('in => out', [animate('150ms ease-out')]),
  transition('out => in', [animate('150ms ease-in')])
]);

export const toggleAnimation2 = trigger('inOutAnimation', [
  state('in', style({width: '*'})),
  state('out', style({width: '6.67rem'})),
  transition('in => out', [animate('150ms ease-out')]),
  transition('out => in', [animate('150ms ease-in')])
]);
