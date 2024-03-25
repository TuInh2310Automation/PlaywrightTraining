import AnimalRacing from "./AnimalRacing";
import Horse from "./Horse";
import Tiger from "./Tiger";

const horse = new Horse("horse1")
const tiger = new Tiger("tiger1")
const dog = new Tiger("dog1")
const winner = AnimalRacing.getWinner([horse, tiger,dog])


