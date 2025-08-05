import { fetchAllCustomers } from "@/services/fetches/outsavvy";
import { mailerLiteBatchRequest } from "./fetches/mailerlite";

export const fetchAllOptedInCustomers = async () => {
  const customers = await fetchAllCustomers();
  return customers
    ? customers.filter(
        (customer) => customer.can_email && customer.customer_email
      )
    : [];
};

export const syncMailerLiteSubscribers = async () => {
  const customers = await fetchAllOptedInCustomers();
  const MAX_REQUESTS = 50;

  const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;
  const subscribeRequests = customers.map(
    ({ customer_email, customer_first_name, customer_last_name }) => ({
      method: "POST",
      path: "api/subscribers",
      body: {
        email: customer_email,
        fields: {
          name: customer_first_name,
          last_name: customer_last_name,
        },
        groups: [MAILERLITE_GROUP_ID],
      },
    })
  );

  const chunkedSubscribeRequests = [];
  for (let i = 0; i <= subscribeRequests.length; i += MAX_REQUESTS) {
    if (i + MAX_REQUESTS > subscribeRequests.length) {
      chunkedSubscribeRequests.push(
        subscribeRequests.slice(i, subscribeRequests.length)
      );
    } else {
      chunkedSubscribeRequests.push(
        subscribeRequests.slice(i, i + MAX_REQUESTS)
      );
    }
  }

  for (let i = 0; i <= chunkedSubscribeRequests.length; i++) {
    if (!chunkedSubscribeRequests[i]) break;

    await mailerLiteBatchRequest(chunkedSubscribeRequests[i]);
  }
};
