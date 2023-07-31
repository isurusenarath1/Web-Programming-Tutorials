<!-- http://localhost/PHP1/exce_04.php -->

<?php

function getDayOfWeek($number) {
    switch ($number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid number";
    }
}

$number = 3;
$dayOfWeek = getDayOfWeek($number);

echo "Number: " . $number . "\n";
echo "Day of the Week: " . $dayOfWeek . "\n";
?>