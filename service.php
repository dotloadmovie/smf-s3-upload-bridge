<?php
    header('Content-Type: application/json');

    // just a test JSON response to check the proxy functions for AJAX

    $response = new stdClass();
    $response -> message = 'sample response';

    echo json_encode($response);