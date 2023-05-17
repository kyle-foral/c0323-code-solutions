select "genres"."name",
count("films") as "appearedIn"
from "castMembers"
join "actors" using ("actorId")
join "films" using ("filmId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genres"."name";
