import z from "zod";

const OUTSAVVY_ACCESS_TOKEN = process.env.OUTSAVVY_ACCESS_TOKEN;
const outsavvyHeaders = {
  Authorization: `Partner ${OUTSAVVY_ACCESS_TOKEN}`,
};

const outSavvyDateSchema = z.object({
  id: z.number().int(),
  timezone: z.string(),
  startlocal: z.iso.datetime(),
  endLocal: z.iso.datetime(),
  event_date_description: z.string(),
});

const outSavvyEventSchema = z.object({
  id: z.number().int(),
  organiser_id: z.number().int(),
  name: z.string(),
  description: z.string(),
  url: z.url(),
  dates: outSavvyDateSchema.array(),
  image_url: z.url(),
  localtion_name: z.string(),
  price: z.string(),
});

const paginatedOutsavvyEventResponseSchema = z.object({
  paging: z.object({
    total_items: z.number().int().positive(),
    page_number: z.number().int().positive(),
    page_size: z.number().int().positive(),
    total_pages: z.number().int().positive(),
  }),
  events: outSavvyEventSchema.array(),
});

const outSavvyCustomerSchema = z.object({
  id: z.number().int(),
  organiser_id: z.number().int(),
  customer_first_name: z.string(),
  customer_last_name: z.string(),
  customer_email: z.email(),
  can_email: z.boolean(),
  date_created: z.iso.datetime(),
});

const paginatedOutsavvyCustomerResponseSchema = z.object({
  total_items: z.number().int().positive(),
  page_number: z.number().int().positive(),
  page_size: z.number().int().positive(),
  list: outSavvyCustomerSchema.array(),
  total_pages: z.number().int().positive(),
  has_previous_page: z.boolean(),
  has_next_page: z.boolean(),
  next_page_number: z.number().int().positive(),
  previous_page_number: z.number().int().positive(),
});

type OutSavvyCustomer = z.infer<typeof outSavvyCustomerSchema>;
type OutSavvyEvent = z.infer<typeof outSavvyEventSchema>;

export const fetchAllCustomers = async (): Promise<OutSavvyCustomer[]> => {
  const PAGE_SIZE = 1000;
  const outSavvyCustomerResponse = await fetch(
    `https://api.outsavvy.com/v1/customers?page_size=${PAGE_SIZE}`,
    {
      headers: outsavvyHeaders,
    }
  )
    .then((response) => response.json())
    .then((jsonResponse) =>
      paginatedOutsavvyCustomerResponseSchema.parse(jsonResponse)
    )
    .catch((error) => console.error(error));

  return outSavvyCustomerResponse ? outSavvyCustomerResponse.list : [];
};

export const fetchLiveEvents = async (): Promise<OutSavvyEvent[]> => {
  const outsavvyEventsApiResponse = await fetch(
    `https://api.outsavvy.com/v1/events/search`,
    {
      headers: outsavvyHeaders,
    }
  )
    .then((response) => response.json())
    .then((jsonResponse) =>
      paginatedOutsavvyEventResponseSchema.parse(jsonResponse)
    )
    .catch((error) => console.error(error));

  return outsavvyEventsApiResponse ? outsavvyEventsApiResponse.events : [];
};
