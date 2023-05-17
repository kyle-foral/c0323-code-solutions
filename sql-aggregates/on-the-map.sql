select count(*) as "totalCities"
from "cities"
join "countries" using ("countryId")
where "countries"."countryId" = '103'
