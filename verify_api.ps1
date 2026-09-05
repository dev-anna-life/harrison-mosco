$track = Invoke-RestMethod -Uri "http://localhost:3005/api/track?q=HM-2026-8941" -Method Get
Write-Host "TRACK SUCCESS: " $track.order.proposedName " | Status: " $track.order.status

$leadBody = @{
    fullName = "Emeka Okafor"
    whatsappPhone = "+2348039991111"
    email = "emeka@example.com"
    proposedBusinessName = "Zulupay Technologies"
    packageInterested = "Pro"
    shareCapitalMillions = 2
    source = "test-suite"
} | ConvertTo-Json

$leadRes = Invoke-RestMethod -Uri "http://localhost:3005/api/leads" -Method Post -Body $leadBody -ContentType "application/json"
Write-Host "LEAD SUCCESS: " $leadRes.success " | Lead ID: " $leadRes.leadId

$home = Invoke-WebRequest -Uri "http://localhost:3005/" -Method Get
Write-Host "HOME HTTP CODE: " $home.StatusCode

$limited = Invoke-WebRequest -Uri "http://localhost:3005/limited" -Method Get
Write-Host "LIMITED HTTP CODE: " $limited.StatusCode
