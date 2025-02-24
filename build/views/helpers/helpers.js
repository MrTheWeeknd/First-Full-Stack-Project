"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProfs = listProfs;
function listProfs(profs) {
    return `<ul>${profs.map((prof) => `<li>${prof.name}</li>`).join("")}</ul>`;
}
