const ftp = require("basic-ftp");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        console.log("Connecting to FTP...");
        await client.access({
            host: "YOUR_FTP_HOST",
            user: "YOUR_FTP_USERNAME",
            password: "YOUR_FTP_PASSWORD",
            port: 21,
            secure: true,
            secureOptions: { rejectUnauthorized: false }
        });
        console.log("Connected successfully!");
        
        const startDir = await client.pwd();
        console.log("Start Dir: ", startDir);
        if (!startDir.endsWith("public_html")) {
            try {
                await client.cd("public_html");
                console.log("Moved to public_html");
            } catch (e) {
                console.log("Could not cd to public_html, staying in " + startDir);
            }
        }
        
        console.log("Cleaning up remote files...");
        try {
            await client.remove(".in.dist.zip.");
        } catch (e) {}
        try {
            await client.remove("dist.zip");
        } catch (e) {}
        try {
            await client.remove("unzip.php");
        } catch (e) {}

        console.log("Uploading dist.zip...");
        await client.uploadFrom("dist.zip", "dist.zip");

        console.log("Uploading unzip.php...");
        await client.uploadFrom("unzip.php", "unzip.php");
        
        console.log("Deployment complete!");
    }
    catch(err) {
        console.error("Deployment failed:", err);
    }
    client.close();
}

deploy();
