const getRendered = (body: string) => `
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <div id="app">
                ${body}
            </div>
        </body>
        <script src="http://localhost:5000/static/client.js"></script>
    </html>
`;

export default getRendered;