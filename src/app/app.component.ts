//ANGULAR//
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
//RXJS//
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.BreakpointObserver.observe(
    Breakpoints.Handset
  ).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(private BreakpointObserver: BreakpointObserver) {}
};
