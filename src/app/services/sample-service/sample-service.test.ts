import { TestBed } from '@angular/core/testing';
import { SampleServiceService, globalSum } from './sample-service.service';
import { assert, beforeEach, describe,  test, it, expect } from 'vitest';

describe("addition", () => {
    let sampleService: SampleServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SampleServiceService]
        });

        sampleService = TestBed.inject(SampleServiceService);
    });

    it('testing it', () => {
        assert.equal(globalSum(1, 2), 3);
        expect(globalSum(1, 2)).toEqual(5);
    })

    test('adds 1 to 2 and equals to 3', () => {
        assert.equal(sampleService.sum(1, 2), 3);
        assert.equal(globalSum(1, 2), 3);
    });
    
    test('fail a test', () => {
        assert.equal(globalSum(1, 2), 3);
    });
})