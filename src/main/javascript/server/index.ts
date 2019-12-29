const getRendered = (body: string) => `
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/main.css">
        </head>
        <body>
            <div id="app">
                ${body}
            </div>
        </body>
        <script src="/client.js"></script>
    </html>
`;

export default getRendered;