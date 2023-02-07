//import { users } from './data'
import User from './User.js'


"use strict";




console.log("hello")

async function getData() {
    const baseUrl = " https://randomuser.me/api/?results=20";
    const data = await fetch(baseUrl);
    const dataJson = await data.json();
    console.log(dataJson)
}


const personne = new User()
