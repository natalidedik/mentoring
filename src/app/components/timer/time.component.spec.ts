import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TimeComponent } from './time.component';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TimeComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
  });

    it('should create TimeComponent', () => {
      expect(component).toBeTruthy();
    });

    it('should destroy TimeComponent', () => {
      spyOn(component, 'ngOnDestroy');
      component.ngOnDestroy();
      expect(component.ngOnDestroy).toHaveBeenCalled();
    });

    it('should call startTimer method', () => {
      spyOn(component, 'startTimer');
      component.startTimer();
      expect(component.startTimer).toHaveBeenCalled();
      expect(component.startTimer).toHaveBeenCalledTimes(1);
    });

    it('should call stopTimer method', () => {
      spyOn(component, 'stopTimer');
      component.stopTimer();
      expect(component.stopTimer).toHaveBeenCalled();
    }); 

    it('should display correct time for currentTime in updateCurrentTime method', () => {
      let currentTime = new Date('2021-07-01T10:10:02.000Z');
      component.updateCurrentTime();
      expect(currentTime).toEqual(new Date('10:10:02'));
    }); 
    
  });
