vi.mock("@/services/fetches/outsavvy", () => ({
  fetchAllCustomers: vi.fn(() =>
    Promise.resolve([
      {
        id: 1,
        organiser_id: 123,
        customer_first_name: "Alice",
        customer_last_name: "Smith",
        customer_email: "alice@example.com",
        can_email: true,
        date_created: "2025-07-20T12:00:00Z",
      },
      {
        id: 2,
        organiser_id: 123,
        customer_first_name: "Bob",
        customer_last_name: "Jones",
        customer_email: "bob@example.com",
        can_email: false,
        date_created: "2025-07-21T14:00:00Z",
      },
      {
        id: 3,
        organiser_id: 123,
        customer_first_name: "Charlie",
        customer_last_name: "Brown",
        customer_email: "charlie@example.com",
        can_email: true,
        date_created: "2025-07-22T15:00:00Z",
      },
    ])
  ),
}));

vi.mock("@/services/fetches/mailerlite", () => ({
  mailerLiteBatchRequest: vi.fn(() => Promise.resolve({ status: 200 })),
}));

import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  fetchAllOptedInCustomers,
  syncMailerLiteSubscribers,
} from "@/services/syncSubscribers";
import { mailerLiteBatchRequest } from "@/services/fetches/mailerlite";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("fetchAllOptedInCustomers", () => {
  test("returns only customers who opted in to emails", async () => {
    const result = await fetchAllOptedInCustomers();
    expect(result.length).toEqual(2);
  });
});

describe("syncMailerLiteSubscribers", () => {
  test("calls mailerLiteBatchRequest with correct batched payload", async () => {
    vi.stubEnv("MAILERLITE_GROUP_ID", "mock-group-id");

    await syncMailerLiteSubscribers();

    expect(mailerLiteBatchRequest).toHaveBeenCalledTimes(1);
    expect(mailerLiteBatchRequest).toHaveBeenCalledWith([
      {
        method: "POST",
        path: "api/subscribers",
        body: {
          email: "alice@example.com",
          fields: {
            name: "Alice",
            last_name: "Smith",
          },
          groups: ["mock-group-id"],
        },
      },
      {
        method: "POST",
        path: "api/subscribers",
        body: {
          email: "charlie@example.com",
          fields: {
            name: "Charlie",
            last_name: "Brown",
          },
          groups: ["mock-group-id"],
        },
      },
    ]);
  });
});
