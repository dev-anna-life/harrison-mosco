$orderBody = @{
    packageChoice = "Pro"
    isOutsourcing = $false
    shareCapitalMillions = 3
    proposedName1 = "OmniFlow Logistics Ltd"
    proposedName2 = "OmniFlow Freight Global Ltd"
    businessActivity = "Haulage, logistics, freight forwarding and warehousing."
    directors = @(
        @{
            firstName = "Chinedu"
            surname = "Eze"
            dob = "1990-05-14"
            gender = "Male"
            sharePercentage = 60
            email = "chinedu@omniflow.ng"
            phoneCountryCode = "+234"
            phone = "8031234567"
            stateOfResidence = "Rivers"
            lgaOfResidence = "Port Harcourt"
            cityOfResidence = "Port Harcourt"
            residentialAddress = "12 Trans Amadi Industrial Layout"
            idType = "NIN"
            identificationNumber = "12345678901"
        },
        @{
            firstName = "Ngozi"
            surname = "Eze"
            dob = "1994-08-22"
            gender = "Female"
            sharePercentage = 40
            email = "ngozi@omniflow.ng"
            phoneCountryCode = "+234"
            phone = "8037654321"
            stateOfResidence = "Rivers"
            lgaOfResidence = "Port Harcourt"
            cityOfResidence = "Port Harcourt"
            residentialAddress = "12 Trans Amadi Industrial Layout"
            idType = "NIN"
            identificationNumber = "98765432109"
        }
    )
    includeAiVideo = $true
    includeAutomatedInvoicing = $true
    termsConsent = $true
} | ConvertTo-Json -Depth 5

$orderRes = Invoke-RestMethod -Uri "http://localhost:3005/api/orders" -Method Post -Body $orderBody -ContentType "application/json"
Write-Host "ORDER PLACED SUCCESSFULLY!"
Write-Host "Order Reference: " $orderRes.reference
Write-Host "Calculated Total: " $orderRes.formattedTotal
