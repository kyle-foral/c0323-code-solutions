select count(*) as "totalDVDS"
from "inventory"
join "stores" using ("storeId")
