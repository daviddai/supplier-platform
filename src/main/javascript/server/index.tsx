const getRendered = (body: string) => `
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="http://localhost:5000/main.css">
        </head>
        <body>
            <div id="app">
                ${body}
            </div>
        </body>
        <script src="http://localhost:5000/client.js"></script>
    </html>
`;

export default getRendered;