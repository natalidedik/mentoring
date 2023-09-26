import {
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-time',
  template: '<span #curr></span>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeComponent implements OnDestroy, AfterViewInit {
  private timerId: number | undefined;
  @ViewChild(
    'curr'
  ) curr!: ElementRef<HTMLSpanElement>;

  constructor(
    private readonly zone: NgZone,
    private readonly dateService: DateService) {
  }

  ngAfterViewInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private updateCurrentTime(): void {
    const now = new Date();
    const hours = this.dateService.formatNumber(now.getHours());
    const minutes = this.dateService.formatNumber(now.getMinutes());
    const seconds = this.dateService.formatNumber(now.getSeconds());
    this.curr.nativeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  }

  startTimer(): void {
    this.updateCurrentTime();

    this.zone.runOutsideAngular(() => {
      this.timerId = setInterval(() => this.updateCurrentTime(), 1000);
    });
  }

  stopTimer(): void {
    if (typeof this.timerId !== 'undefined') {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }
}
