select "a"."line1",
        "a"."district",
        "cities"."name"
from "addresses" as "a"
join "cities" using ("cityId")
