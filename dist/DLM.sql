SELECT 
    users.first_name AS user_name,
    rides.name AS ride_name,
    liness.*
FROM liness
INNER JOIN users 
    ON users.id = liness.id_ride
INNER JOIN rides
    ON rides.id = liness.id_user
WHERE rides.area = 'A';