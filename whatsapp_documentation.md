

** API for sending whatsapp login OTP **

Template for sending whatsapp login OTP, all the variables in URL like {{apiBaseUrl}} and {{vendorUid}} and {{bearerToken}} are to be stored in .env file and to be edited by superadmin 

curl --location -g '{{apiBaseUrl}}/{{vendorUid}}/contact/send-template-message' \


{{apiBaseUrl}}  = https://wanamaste.in/api

{{vendorUid}} = 7bb154f0-92b4-4415-b569-e3e45708bd1a

{{bearerToken}} = v5o1T2w97PEtbYAY2e371JLuMuyI3yi2LK6pxAhdvnjapVx8uc6v6DYFs4yy66q3

body raw (json)

{
    "phone_number": "9441856314",
    "template_name" : "indra_app",
    "template_language" : "en_US",
    "field_1" : "123456", // This is the verification code for the template body
    "button_0" : "123456"  // This is the verification code for the COPY_CODE button
    // "copy_code" : "{{field_1}}" // Remove or re-evaluate this field. It seems redundant or misplaced for a COPY_CODE button.
}


example request:
https://wanamaste.in/api/7bb154f0-92b4-4415-b569-e3e45708bd1a/contact/send-template-message?token=v5o1T2w97PEtbYAY2e371JLuMuyI3yi2LK6pxAhdvnjapVx8uc6v6DYFs4yy66q3

{
    "phone_number": "9441856314",
    "template_name" : "indra_app",
    "template_language" : "en_US",
    "field_1" : "123456", // This is the verification code for the template body
    "button_0" : "123456"  // This is the verification code for the COPY_CODE button
    // "copy_code" : "{{field_1}}" // Remove or re-evaluate this field. It seems redundant or misplaced for a COPY_CODE button.
}