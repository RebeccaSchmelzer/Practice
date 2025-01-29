const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const PORT = 5000;

const courses = [
    {
        id: 1,
        title: "Next.js Basics",
        instructor: {
            name: "Alice Johnson",
            email: "alice.johnson@example.com"
        },
        duration: "2 hours",
        topics: ["Pages", "Routing", "API Routes"]
    },
    {
        id: 2,
        title: "Advanced Next.js",
        instructor: {
            name: "Bob Smith",
            email: "bob.smith@example.com"
        },
        duration: "4 hours",
        topics: ["SSR", "SSG", "ISR"]
    },
    {
        id: 3,
        title: "Next.js with TypeScript",
        instructor: {
            name: "Charlie Brown",
            email: "charlie.brown@example.com"
        },
        duration: "3 hours",
        topics: ["TypeScript Basics", "TypeScript with React", "TypeScript with Next.js"]
    }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/api/courses' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*'); // Enable CORS
        res.end(JSON.stringify(courses));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');

    // Send a welcome message to the client
    ws.send(JSON.stringify({ message: 'Welcome to the WebSocket server!' }));

    // Handle incoming messages from the client
    ws.on('message', (message) => {
        console.log('Received:', message);
        // Echo the message back to the client
        ws.send(`Server received: ${message}`);
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});