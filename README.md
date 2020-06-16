# hackathon - 

Server: HTTP://EC2-3-16-22-54.US-EAST-2.COMPUTE.AMAZONAWS.COM

Objectives

1. You are stuck in a labyrinth, and you have to find your way out. As you navigate through the labyrinth, you may find letters: please collect them.
2. Once you made your way through the labyrinth, you need to use the collected letters to guess a password, and submit it to a provided URL.
Navigating the Labyrinth
• GET /VirtualControl/ROOMS/[RoomID]/cws/hackathon/maze/[ParticipantID]/navigate
• PUT /VirtualControl/ROOMS/[RoomID]/cws/hackathon/maze/[ParticipantID]/navigate
• Body: Single letter direction: L, R, F, or B (no \r or \n) Left, Right, Forward, or Back
• When you send a direction, your player will:
• Turn Left, Turn Right, or Turn Around. (Forward does not change your direction, Back turns you 180o)
• Move one step forward, if possible.

Responses

2020 Hackathon

The GET and PUT calls both return the same data set. The only difference is that the GET doesn’t move you. The response of a PUT reflects the information after you moved. Each of these attributes are on their own line, Each line ends with \r.

1. Coordinates of your current location, and which direction you are facing. The directions are N,S,E,W for North, South, East, and West.. Format: x,y,d.
2. Optional: Possible directions you can move (L, R, F, B for Left, Right, Forward, and Back). Format (Only the available directions will be here) D1D2D3D4
3. Optional: Letter
4. Optional: Relative URL to submit the password.