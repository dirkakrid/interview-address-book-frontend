# Address Book Coding Exercise

## Goals and Expectations
The goal of this exercise is to create a website for an address book. You have 2 hours to do this exercise and therefore you will only need to subset of the functionallity. Here is what we expect:

- Implement a page that displays the list of contacts available
- Implement "edit a contact" to address book functionality
- You don't need to implement the storage layer
- You don't need to implement the internals of the API layer. However you will need write your "fake" api. See fake api section. Your webpages should call to your fake API to get results. For edit, you should call your fake api to send data but the data does not need to be persisted.  
- You can use these mock ups [TODO: provide mockups] that you can use a guide but by feel free to use your creative license to showcase the information as you wish. 
- Approach this in test driven development fashion 
- Use any frameworks/tools/technologies you wish to use

## Instructions
This exercise has dependencies on Node.js (for running the mock api) and grunt. 

### Prerequisites
Node.js - You can download a Node.js installer for your operating system from http://nodejs.org/download/.

Once you have the prerequisties
- Fork the repo
- run 
``` 
npm install
```
- if you don't already have grunt installed globally
```
npm install -g grunt-cli
```
- run grunt so that you have watch setup and your website gets hosted. Once grunt runs, it will tell on what port to hit the website
```
grunt
```
- go to your browser and hit http://localhost:8888
- Do your work
- Submit a pull request

## Fake API
This project is wired up with [restify](http://mcavage.me/node-restify/). There is an example of fake api in server/api.js.
```
apiServer.get('contacts',respond)
function respond(req, res, next) {
 ...
 res.send(contacts)
}
```
You can follow the same pattern to add more Apis. When grunt runs it proxies all calls to api (http://localhost:8888/api) to restify. So for the above example, to hit the contacts api you would hit, http://localhost:8888/api/contacts
TODO: provide a JSON file with contacts
