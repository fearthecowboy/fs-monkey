'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fsProps = exports.fsProps = ['constants', 'F_OK', 'R_OK', 'W_OK', 'X_OK', 'Stats'];

var fsSyncMethods = exports.fsSyncMethods = ['renameSync', 'ftruncateSync', 'truncateSync', 'chownSync', 'fchownSync', 'lchownSync', 'chmodSync', 'fchmodSync', 'lchmodSync', 'statSync', 'lstatSync', 'fstatSync', 'linkSync', 'symlinkSync', 'readlinkSync', 'realpathSync', 'unlinkSync', 'rmdirSync', 'mkdirSync', 'readdirSync', 'closeSync', 'openSync', 'utimesSync', 'futimesSync', 'fsyncSync', 'writeSync', 'readSync', 'readFileSync', 'writeFileSync', 'appendFileSync', 'existsSync', 'accessSync', 'createReadStream', 'createWriteStream', 'watchFile', 'unwatchFile', 'watch'];

var fsAsyncMethods = exports.fsAsyncMethods = ['rename', 'ftruncate', 'truncate', 'chown', 'fchown', 'lchown', 'chmod', 'fchmod', 'lchmod', 'stat', 'lstat', 'fstat', 'link', 'symlink', 'readlink', 'realpath', 'unlink', 'rmdir', 'mkdir', 'readdir', 'close', 'open', 'utimes', 'futimes', 'fsync', 'write', 'read', 'readFile', 'writeFile', 'appendFile', 'exists', 'access'];