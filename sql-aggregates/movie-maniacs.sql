select
"customers"."firstName",
"customers"."lastName",
sum("amount") as "totalSpent"
from "payments"
join "customers" using ("customerId")
join "rentals" using ("rentalId")
group by "customers"."firstName", "customers"."lastName"
order by "totalSpent" desc
