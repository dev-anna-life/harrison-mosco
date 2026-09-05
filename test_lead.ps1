$payload = @{
    fullName = "Ibrahim Danladi"
    whatsappPhone = "08137092154"
    email = "ibrahim@example.com"
    proposedBusinessName = "Danladi Logistics Ltd"
    packageInterested = "Pro"
    shareCapitalMillions = 2
    source = "free-name-checker"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:3005/api/leads" -Method POST -ContentType "application/json" -Body $payload
$response | ConvertTo-Json
