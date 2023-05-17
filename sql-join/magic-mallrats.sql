select "c". "firstName",
      "c"."lastName"
from "inventory"
join "customers" as "c" using ("storeId")
join "films" using ("filmId")
join "rentals" using ("inventoryId")
where "title" = 'Magic Mallrats'
