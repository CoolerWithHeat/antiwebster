import requests
import time
import random
import threading

ENGLISH_MIN_INTERVAL = 3600        # 1 hour
ENGLISH_MAX_INTERVAL = 12600       # 3.5 hours

UZBEK_MIN_INTERVAL = 3600          # 1 hour
UZBEK_MAX_INTERVAL = 7200          # 2 hours


def add_fake_view(language_id):
    data = {"language": language_id}
    try:
        response = requests.post('http://127.0.0.1:7777/addfakeview/', json=data)
        print(f"Added fake view for language {language_id}: {response.text}")
    except Exception as e:
        print(f"Error adding fake view for language {language_id}: {e}")

def run_english_views():
    while True:
        interval = random.uniform(ENGLISH_MIN_INTERVAL, ENGLISH_MAX_INTERVAL)
        print(f"[English] Sleeping for {interval:.2f} seconds")
        time.sleep(interval)
        add_fake_view(1)

def run_uzbek_views():
    while True:
        interval = random.uniform(UZBEK_MIN_INTERVAL, UZBEK_MAX_INTERVAL)
        print(f"[Uzbek] Sleeping for {interval:.2f} seconds")
        time.sleep(interval)
        add_fake_view(2)

if __name__ == "__main__":
    t1 = threading.Thread(target=run_english_views, daemon=True)
    t2 = threading.Thread(target=run_uzbek_views, daemon=True)
    t1.start()
    t2.start()

    while True:
        time.sleep(3600)