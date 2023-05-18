import asyncio
import json
from websockets.server import serve, WebSocketServerProtocol


def setup_data_import():
  pass


async def handler(websocket: WebSocketServerProtocol):
  await websocket.send(json.dumps({'type': 'test'}))

  async for message in websocket:
    data = json.loads(message)
    print(data)


async def main():
  async with serve(handler, 'localhost', 3001):
    print('Websocket server running on port 3001')
    setup_data_import()
    await asyncio.Future()  # run forever


asyncio.run(main())