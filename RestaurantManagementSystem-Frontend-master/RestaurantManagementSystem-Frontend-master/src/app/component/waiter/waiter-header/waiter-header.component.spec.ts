import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WaiterHeaderComponent} from './waiter-header.component';

describe('WaiterHeaderComponent', () => {
    let component: WaiterHeaderComponent;
    let fixture: ComponentFixture<WaiterHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WaiterHeaderComponent]
        });
        fixture = TestBed.createComponent(WaiterHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
