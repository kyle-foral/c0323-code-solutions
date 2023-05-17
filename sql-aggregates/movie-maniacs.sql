select
"customers"."firstName",
"customers"."lastName",
sum("amount") as "totalSpent"
from "payments"
join "customers" using ("customerId")
join "rentals" using ("rentalId")
group by "customers"."customerId"
order by "totalSpent" desc
