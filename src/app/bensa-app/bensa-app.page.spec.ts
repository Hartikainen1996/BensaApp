import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BensaAppPage } from './bensa-app.page';

describe('BensaAppPage', () => {
  let component: BensaAppPage;
  let fixture: ComponentFixture<BensaAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BensaAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BensaAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
