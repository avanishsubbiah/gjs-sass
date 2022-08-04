import * as fs from 'fs';

export class sussyfs {
    static readFileSync(path, encoding) {
        console.log(encoding);
        return fs.readFileSync(path, encoding);
    }
    static writeFileSync(path, contents) {
        fs.writeFileSync(path, contents);
    }
    static existsSync(path) {
        return true;
        // return fs.existsSync(path);
    }
    static unlinkSync(path) {
        fs.unlinkSync(path);
    }
    //static readdirSync(path) {
    //	console.log("RAN READDIR--------------------------------");
    //	console.log(fs.readdirSync(path));
    //    return fs.readdirSync(path);
    //}
    static statSync(path) {
	console.log(fs.statSync(path));
        return fs.statSync(path);
    }
    static mkdirSync(path) {
        fs.mkdirSync(path);
    }
}
