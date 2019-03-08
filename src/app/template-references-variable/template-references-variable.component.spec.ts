import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferencesVariableComponent } from './template-references-variable.component';

describe('TemplateReferencesVariableComponent', () => {
  let component: TemplateReferencesVariableComponent;
  let fixture: ComponentFixture<TemplateReferencesVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferencesVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferencesVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
