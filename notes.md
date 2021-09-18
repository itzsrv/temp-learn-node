Globals Variables in nodes

vanila js applications -- access to the window Object -- cool -- bunch of useful things (query selector, builtin fetch)
//node -- there is no window, because there is no browser

// **dirname
// **filename
// require -- function to use modules
// module -- info about current module
// process -- info about the env where the program is being executed

//NodeJS uses CommonJS library under the hood, every file in node is module (by default)

modules.exports = object, functions
= require(./)

built in modules
os
path
fs
http

interacting with file systems
-async non-blocking
-sync blocking

---

http module

- every single http method is important
- mostly things revolve around server setup (aka http module)
- core features of node in action

creating your own server and setting up the api

---

when we install node, we automatically install npm (node package manager)

npm enables us three things

- reuse our own code in other project
- use other's code in our project
- share our solutions to external world

npm projects are shared at npmjs.com

There is no quality control on npm packages, try with high weekly downloads, popular

npm - global command, comes with node
npm --version

local dependency -- only in current working project
npm i <>

global dependency -- use it in any project
npm install -g <>
sudo npm install -g <> (mac)

npx --> less and less need of setting up something globally

package.json
manifest file (stores important info about project/package)
create properties
or npm init
or npm init -y

why package.json
if you install a package, it will become a dependency
