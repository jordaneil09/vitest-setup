import { ComponentFixture, TestBed } from "@angular/core/testing";
import { assert, beforeEach, describe, test } from "vitest";
import { AppComponent } from "./app.component";

describe('App Component', () => {
    let fixture: ComponentFixture<AppComponent>;

    // beforeEach(async () => {
    //     await TestBed.configureTestingModule({
    //         imports: [
    //             AppComponent
    //         ]
    //     }).compileComponents();

    //     // fixture = TestBed.createComponent(AppComponent);
    // });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();
    });

    test('should render', () => {
        fixture = TestBed.createComponent(AppComponent);
        const sample = fixture.componentInstance
        assert.isNotNull(sample, 'is null');
    })
});