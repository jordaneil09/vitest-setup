import { TestBed } from "@angular/core/testing";
import { assert, beforeEach, describe, test } from "vitest";
import { SampleComponentComponent } from "./sample-component.component";

describe('Sample Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SampleComponentComponent]
        })
    })

    test('Should render', () => {
        const fixture = TestBed.createComponent(SampleComponentComponent);
        const component = fixture.componentInstance;

        assert.isNotNull(component)
    })
});