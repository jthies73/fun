import { describe, expect, it } from "@jest/globals";

import { add } from "@/lib/sample-use-case/sample-service";

describe("SomeService", () => {
	it("should add two numbers correctly", () => {
		const x = add(1, 2);
		expect(x).toBe(3);
	});
});
