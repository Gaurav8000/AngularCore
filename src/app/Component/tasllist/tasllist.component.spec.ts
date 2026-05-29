import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasllistComponent } from './tasllist.component';

describe('TasllistComponent', () => {
  let component: TasllistComponent;
  let fixture: ComponentFixture<TasllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasllistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
