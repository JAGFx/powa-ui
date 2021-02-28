# Get stats in month
SELECT ROUND(AVG(sd.value), 1) as avg, ROUND(MIN(sd.value), 1) as min, ROUND(MAX(sd.value), 1) as max
FROM sensor_data sd
WHERE sd.sensor_id = :sid
  AND MONTH(sd.created_at) = :currentMonth;

# Get stats in sun day
SELECT ROUND(AVG(sd.value), 1) as avg, ROUND(MIN(sd.value), 1) as min, ROUND(MAX(sd.value), 1) as max
FROM sensor_data sd
WHERE sd.sensor_id = :sid
  AND TIME(sd.created_at) BETWEEN '07:30:00' AND '21:29:59';

# Get stats in night
SELECT ROUND(AVG(sd.value), 1) as avg, ROUND(MIN(sd.value), 1) as min, ROUND(MAX(sd.value), 1) as max
FROM sensor_data sd
WHERE sd.sensor_id = :sid
  AND (
        TIME(sd.created_at) BETWEEN '00:00:00' AND '07:29:59'
        OR TIME(sd.created_at) BETWEEN '21:30:00' AND '23:59:29'
    );

# Get last value (current)
SELECT sd.value
FROM sensor_data sd
WHERE sd.sensor_id = :sid
ORDER BY sd.created_at DESC
LIMIT 1;

# Get stats for this day
SELECT HOUR(sd.created_at) as hour, AVG(sd.value) as value
FROM sensor_data sd
WHERE sd.sensor_id = :sid
  AND DATE(sd.created_at) = :currentDay
GROUP BY HOUR(sd.created_at);
