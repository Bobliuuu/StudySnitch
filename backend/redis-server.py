import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

r.set('bad', '3')

print(r.get('bad'))
