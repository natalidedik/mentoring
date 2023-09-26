import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import {DateService} from './date.service';

describe('DateService', () => {
  let dateService: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    dateService = TestBed.inject(DateService);
  });

  it('should format a number less than 10 with a leading zero', () => {
    const result = dateService.formatNumber(5);
    expect(result).toBe('05');
  });

  it('should not change the format of a number greater than or equal to 10', () => {
    const result = dateService.formatNumber(15);
    expect(result).toBe('15');
  });

  it('should handle the number 0 correctly', () => {
    const result = dateService.formatNumber(0);
    expect(result).toBe('00');
  });
});
