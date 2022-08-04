import * as fs from 'fs';

export class sussyfs {
    static readFileSync(path, encoding) {
        return fs.readFileSync(path, encoding);
    }
    static writeFileSync(path, contents) {
        return fs.writeFileSync(path, contents);
    }
    static existsSync(path) {
        return true;
        // return fs.existsSync(path);
    }
    static unlinkSync(path) {
        return fs.unlinkSync(path);
    }
    static readdirSync(path) {
        return fs.readdirSync(path);
    }
    static statSync(path) {
        return fs.statSync(path);
    }
    static mkdirSync(path) {
        return fs.mkdirSync(path);
    }
}