# FHIR structure

Playing around with FHIR resources.

Is possible to test it agains a FHIR server.

There is a public server [availble here](https://wiki.hl7.org/Publicly_Available_FHIR_Servers_for_testing). I tested with [this one](https://hapi.fhir.org/baseR4/swagger-ui/).

It's also possible to test against local FHRI servers.

___

# Using local servers

## Starting local server

Just run:

```bash
docker run -p 8080:8080 hapiproject/hapi:latest
```

## Creating Patient resources

<details>
<summary>Creating Patient 1</summary><p>

```bash
curl --location 'http://localhost:8080/fhir/Patient' \
--header 'Content-Type: application/json' \
--data-raw '    {
        "resourceType": "Patient",
        "gender": "male",
        "name": [
            {
                "use": "official",
                "text": "Edsger Dijkstra",
                "given": [
                    "Edsger",
                    "Barbosa"
                ],
                "family": "Dijkstra",
                "prefix": ["Sr"]
            }
        ],
        "birthDate": "1910-01-01",
        "telecom": [
            {
                "system": "phone",
                "use": "mobile",
                "value": "+55 85 9 9999 999",
                "rank": 1
            },
            {
                "system": "email",
                "use": "home",
                "value": "my-mail@gmail.com",
                "rank": 2
            }
        ],
        "address": [
            {
                "use": "home",
                "type": "physical",
                "country": "Brazil",
                "city": "São Paulo",
                "postalCode": "98765432",
                "state": "São Paulo",
                "line": ["256"],
                "text": "Av Paulista. 500"
            }
        ]
    }'
```
</details>



<details>
<summary>Creating Patient 2</summary><p>

```bash
curl --location 'http://localhost:8080/fhir/Patient' \
--header 'Content-Type: application/json' \
--data-raw '    {
        "resourceType": "Patient",
        "gender": "male",
        "name": [
            {
                "use": "official",
                "text": "Bjarne Stroustrup",
                "given": [
                    "Bjarne",
                    "Barbosa"
                ],
                "family": "Stroustrup",
                "prefix": ["Sr", "Mr."]
            }
        ],
        "birthDate": "1910-01-01",
        "telecom": [
            {
                "system": "phone",
                "use": "mobile",
                "value": "+55 85 9 9999 999",
                "rank": 1
            },
            {
                "system": "email",
                "use": "home",
                "value": "my-mail@gmail.com",
                "rank": 2
            }
        ],
        "address": [
            {
                "use": "home",
                "type": "physical",
                "country": "Brazil",
                "city": "São Paulo",
                "postalCode": "98765432",
                "state": "São Paulo",
                "line": ["256"],
                "text": "Av Paulista. 500"
            }
        ]
    }'
```
</details>


## Searching for a Patient
Just run:
```bash
curl --location 'http://localhost:8080/fhir/Patient?address=Netherlands&_format=xml'
```

## Creating Bundle of Patients
Just run:

<details>
<summary>Creating Bundle</summary><p>

```bash
curl --location 'http://localhost:8080/fhir' \
--header 'Content-Type: application/json' \
--data-raw '{
    "resourceType": "Bundle",
    "type": "transaction",
    "entry": [
        {
            "resource": {
                "resourceType": "Patient",
                "gender": "male",
                "name": [
                    {
                        "use": "official",
                        "text": "Dijkstra",
                        "given": [
                            "Edsger",
                            "Dijkstra"
                        ],
                        "family": "Dijkstra",
                        "prefix": [
                            "Sr"
                        ]
                    }
                ],
                "birthDate": "1930-05-11",
                "deceasedDateTime": "2002-08-06",
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile",
                        "value": "+55 85 9 9999 999",
                        "rank": 1
                    },
                    {
                        "system": "email",
                        "use": "home",
                        "value": "my-mail@gmail.com",
                        "rank": 2
                    }
                ],
                "address": [
                    {
                        "use": "home",
                        "type": "physical",
                        "country": "Netherlands",
                        "city": "Rotterdan",
                        "postalCode": "98765432",
                        "line": [
                            "256"
                        ],
                        "text": "Av Paulista. 500"
                    }
                ]
            },
            "request": {
                "method": "POST",
                "url": "Patient"
            }
        },
        {
            "resource": {
                "resourceType": "Patient",
                "gender": "male",
                "name": [
                    {
                        "use": "official",
                        "text": "Bjarne Stroustrup",
                        "given": [
                            "Bjarne"
                        ],
                        "family": "Stroustrup",
                        "prefix": [
                            "Sr",
                            "Mr."
                        ]
                    }
                ],
                "birthDate": "1950-12-30",
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile",
                        "value": "+55 85 9 9999 999",
                        "rank": 1
                    },
                    {
                        "system": "email",
                        "use": "home",
                        "value": "my-mail@gmail.com",
                        "rank": 2
                    }
                ],
                "address": [
                    {
                        "use": "home",
                        "type": "physical",
                        "country": "Denmark",
                        "city": "Aarhus",
                        "postalCode": "87654321",
                        "line": [
                            "256"
                        ],
                        "text": "Av Paulista. 500"
                    }
                ]
            },
            "request": {
                "method": "POST",
                "url": "Patient"
            }
        }
    ]
}'
```
</details>