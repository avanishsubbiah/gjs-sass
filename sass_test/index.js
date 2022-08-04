import {get_sass} from "./sass.dart.js"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// const sass = require('./sass.dart.cringe')
const fs = require('fs');

// let str = fs.readFileSync("./theme/gnome-shell.scss", 'utf-8');
// console.log(str);
// console.log(sass.load());
console.log(get_sass());
const result = get_sass().compile("./theme/gnome-shell.scss");
// console.log(result);
// console.log(result.css);
fs.writeFileSync('gnome-shell.css', result.css);