const getRendered = (body: string) => `
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <div id="app">
                ${body}
            </div>
        </body>
        <script src="/client.js"></script>
    </html>
`;

export default getRendered;