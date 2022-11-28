import fsp from 'fs/promises';

async function generateFiles (file) {
    const content = await fsp.readFile(file, 'utf-8');

    const lines = content.split('\n');
    for(const line of lines){
        const [file_name, file_content] = line.split(',');
        await fsp.writeFile(file_name , file_content);
    }
}
await generateFiles('./countries.csv');