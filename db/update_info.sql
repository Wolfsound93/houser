UPDATE houser
SET property_name = $2, adress = $3, city = $4, state = $5, zip = $6
WHERE houser_id $1