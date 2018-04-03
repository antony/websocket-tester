## Websocket Tester

A very simple way to test if a websocket responds (and in the way you expect it to)

Available as a simple node app or a [Docker image](https://hub.docker.com/r/antony/websocket-tester/)

### Usage

Specify the environment variables:

```
URL: The websocket endpoint.
INPUT: input payload to send to socket.
```

and optionally:

```
EXPECTED_OUTPUT: The output you expect (this will be asserted)
```

If you don't pass EXPECTED_OUTPUT, the response will simply be echoed.

Then, just run:

```bash
docker run -e "URL=..." -e "INPUT=..." -e "EXPECTED_OUTPUT=..." antony/websocket-tester 
```