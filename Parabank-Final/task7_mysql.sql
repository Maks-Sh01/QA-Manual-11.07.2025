-- 1. Customers from 'Los Angeles'
SELECT id, first_name, last_name, city
FROM customers
WHERE city = 'Los Angeles';

-- 2. Account count per customer
SELECT c.id AS customer_id,
       c.first_name,
       c.last_name,
       COUNT(a.id) AS account_count
FROM customers c
LEFT JOIN accounts a ON c.id = a.customer_id
GROUP BY c.id, c.first_name, c.last_name;

-- 3. Total transactions last month (MySQL)
SELECT SUM(amount) AS total_transactions_last_month
FROM transactions
WHERE date >= DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y-%m-01')
  AND date <  DATE_FORMAT(CURDATE(), '%Y-%m-01');
