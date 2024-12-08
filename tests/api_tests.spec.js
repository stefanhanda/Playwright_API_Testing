import { test, expect } from "@playwright/test";

test("API DELETE Request", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2");

    expect(response.status()).toBe(204);

});

test("API POST Request", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        data: {
            name: "Stefan",
            job: "QA Engineer",
        },
    });

    expect(response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain("Stefan");

    console.log(await response.json());
});

test("API PUT Request", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2", {
        data: {
            name: "Stefan",
            job: "QA Engineer",
        }, 
    });

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain("Stefan");

    console.log(await response.json());
});

test("API GET Request Single User", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2");

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain("Janet");

    console.log(await response.json());
});

test("API GET Request List Users", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2");

    expect(response.status()).toBe(200);
});
