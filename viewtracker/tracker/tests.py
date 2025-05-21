import requests

data =  {  
            "language": 2
        }

request = requests.get('http://127.0.0.1:7777/detaileddata/')

print(request.text)